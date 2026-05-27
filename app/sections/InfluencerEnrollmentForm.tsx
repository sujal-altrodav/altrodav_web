'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Laptop, MapPin, Brain, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'

const GOOGLE_FORM_ACTION_INFLUENCER =
  'https://docs.google.com/forms/d/e/1FAIpQLSdNyABPRSpA4FigcF0WHu504sz0RflfaHt_UYoRQwhnvIWthg/formResponse'

const ENTRY_INFLUENCER = {
  fullName: 'entry.1986425',
  email: 'entry.1517589094',
  collegeName: 'entry.1883714203',
  contactNumber: 'entry.1170959766',
  preferredRole: 'entry.898410520',
  knowledgeLevel: 'entry.337561321',
  hasLaptop: 'entry.1170550368',
  attendanceMode: 'entry.540191966',
  placementEvent: 'entry.307562982',
  referral: 'entry.1976617354',
  graduationYear: 'entry.58429029',
  paidProgramConfirm: 'entry.711169603',
} as const

const roleOptions = [
  'AI-ML Developer',
  'Android Developer',
  'iOS Developer',
  'Backend (Node.js) Developer',
  'Data Analyst',
  'DevOps',
]

export default function InfluencerEnrollmentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [role, setRole] = useState('')
  const [knowledgeLevel, setKnowledgeLevel] = useState([5])
  const [contactNumber, setContactNumber] = useState('')
  const [hasLaptop, setHasLaptop] = useState('')
  const [mode, setMode] = useState('')
  const [placementEvent, setPlacementEvent] = useState('')
  const [referral, setReferral] = useState('')
  const [graduationYear, setGraduationYear] = useState('')
  const [paidProgramConfirm, setPaidProgramConfirm] = useState('')

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Read referral parameter from URL on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const refParam = params.get('ref')
      if (refParam) {
        setReferral(refParam)
      }
    }
  }, [])

  // Auto-fill and hide referral field in any embedded Google Form
  useEffect(() => {
    if (!referral || typeof window === 'undefined') return

    // Function to set and hide the referral field
    const setReferralField = () => {
      const field = document.querySelector(`input[name="${ENTRY_INFLUENCER.referral}"]`) as HTMLInputElement
      if (field) {
        field.value = referral
        // Hide the field and its container
        field.style.display = 'none'
        const container = field.closest('[data-field-id], [role="row"], .form-group, .question') as HTMLElement
        if (container) {
          container.style.display = 'none'
        }
      }
    }

    // Try immediately
    setReferralField()

    // For async-loaded forms, retry with delays
    let retries = 0
    const maxRetries = 30
    const interval = setInterval(() => {
      if (retries >= maxRetries) {
        clearInterval(interval)
        return
      }
      const field = document.querySelector(`input[name="${ENTRY_INFLUENCER.referral}"]`)
      if (field) {
        setReferralField()
        clearInterval(interval)
      }
      retries++
    }, 100)

    return () => clearInterval(interval)
  }, [referral])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Enter a valid email'
    if (!collegeName.trim()) newErrors.collegeName = 'College name is required'
    if (!contactNumber.trim()) newErrors.contactNumber = 'Contact number is required'
    else if (!/^\d{10}$/.test(contactNumber.replace(/\s/g, '')))
      newErrors.contactNumber = 'Enter a valid 10-digit number'
    if (!hasLaptop) newErrors.hasLaptop = 'This field is required'
    if (!mode) newErrors.mode = 'Select a mode'
    if (!placementEvent) newErrors.placementEvent = 'This field is required'
    if (!graduationYear) newErrors.graduationYear = 'Graduation year is required'
    if (!paidProgramConfirm) newErrors.paidProgramConfirm = 'Please confirm to proceed'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    const formData = new URLSearchParams()
    formData.append(ENTRY_INFLUENCER.fullName, fullName.trim())
    formData.append(ENTRY_INFLUENCER.email, email.trim())
    formData.append(ENTRY_INFLUENCER.collegeName, collegeName.trim())
    if (role) formData.append(ENTRY_INFLUENCER.preferredRole, role)
    formData.append(ENTRY_INFLUENCER.knowledgeLevel, String(knowledgeLevel[0]))
    formData.append(ENTRY_INFLUENCER.contactNumber, contactNumber.trim())
    formData.append(ENTRY_INFLUENCER.hasLaptop, hasLaptop)
    formData.append(ENTRY_INFLUENCER.attendanceMode, mode)
    formData.append(ENTRY_INFLUENCER.placementEvent, placementEvent)
    if (referral) formData.append(ENTRY_INFLUENCER.referral, referral)
    formData.append(ENTRY_INFLUENCER.graduationYear, graduationYear)
    formData.append(ENTRY_INFLUENCER.paidProgramConfirm, paidProgramConfirm)

    try {
      await fetch(GOOGLE_FORM_ACTION_INFLUENCER, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="enroll" className="py-24 bg-[#0B0D1A] text-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Application Submitted!
            </h1>
            <p className="text-gray-400 max-w-md mx-auto">
              Thank you for applying. Our team will reach out within 24 hours to discuss next steps.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="enroll" className="py-24 bg-[#0B0D1A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7B93FF] mb-3">
            Enrollment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Altrodav Industry Immersive Program 
          </h1>
        </div>

        <Card className="border-white/10 bg-white/5 backdrop-blur-sm max-w-2xl mx-auto">
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-gray-300">
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* College Name */}
              <div className="space-y-2">
                <Label htmlFor="collegeName" className="text-gray-300">
                  College Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="collegeName"
                  placeholder="Enter your college name"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                />
                {errors.collegeName && (
                  <p className="text-sm text-red-400">{errors.collegeName}</p>
                )}
              </div>

              {/* Preferred Role */}
              <div className="space-y-3">
                <Label className="text-gray-300">Select the Preferred Role</Label>
                <RadioGroup value={role} onValueChange={setRole} className="grid grid-cols-2 gap-3">
                  {roleOptions.map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        role === option
                          ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                          : 'border-white/10 hover:border-[#4A5FE7]/40'
                      }`}
                    >
                      <RadioGroupItem value={option} className="border-gray-400" />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </RadioGroup>
              </div>

              {/* Knowledge Level */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-gray-300">
                  <Brain className="w-4 h-4 text-[#4A5FE7]" />
                  Knowledge Level (1–10) <span className="text-red-400">*</span>
                </Label>
                <div className="px-1">
                  <Slider
                    value={knowledgeLevel}
                    onValueChange={setKnowledgeLevel}
                    min={1}
                    max={10}
                    step={1}
                    className="bg-white/10"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1</span>
                    <span className="font-semibold text-gray-200 text-sm">
                      {knowledgeLevel[0]}
                    </span>
                    <span>10</span>
                  </div>
                </div>
              </div>

              {/* Contact Number */}
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-gray-300">
                  Contact Number <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="contact"
                  placeholder="10-digit mobile number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                />
                {errors.contactNumber && (
                  <p className="text-sm text-red-400">{errors.contactNumber}</p>
                )}
              </div>

              {/* Laptop */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-gray-300">
                  <Laptop className="w-4 h-4 text-[#4A5FE7]" />
                  Do you have a laptop with adequate specs & stable internet?{' '}
                  <span className="text-red-400">*</span>
                </Label>
                <RadioGroup value={hasLaptop} onValueChange={setHasLaptop} className="flex gap-4">
                  {['Yes', 'No'].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        hasLaptop === option
                          ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                          : 'border-white/10 hover:border-[#4A5FE7]/40'
                      }`}
                    >
                      <RadioGroupItem value={option} className="border-gray-400" />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </RadioGroup>
                {errors.hasLaptop && (
                  <p className="text-sm text-red-400">{errors.hasLaptop}</p>
                )}
              </div>

              {/* Attendance Mode */}
              <div className="space-y-3">
                <Label className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#4A5FE7]" />
                  Attendance Mode <span className="text-red-400">*</span>
                </Label>
                <RadioGroup value={mode} onValueChange={setMode} className="flex gap-4">
                  {['In Office', 'Virtual'].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        mode === option
                          ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                          : 'border-white/10 hover:border-[#4A5FE7]/40'
                      }`}
                    >
                      <RadioGroupItem value={option} className="border-gray-400" />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </RadioGroup>
                {errors.mode && (
                  <p className="text-sm text-red-400">{errors.mode}</p>
                )}
              </div>

              {/* Placement Event */}
              <div className="space-y-3">
                <Label className="text-gray-300">
                  Placement Event Attendance (Bangalore, May–June){' '}
                  <span className="text-red-400">*</span>
                </Label>
                <p className="text-xs text-gray-500 -mt-1">
                  We strongly recommend attending in person to maximize benefits; a virtual option is also available.
                </p>
                <RadioGroup
                  value={placementEvent}
                  onValueChange={setPlacementEvent}
                  className="flex gap-4"
                >
                  {[
                    { value: 'Attend In-Person ( Offline)', label: 'In-Person' },
                    { value: 'Virtual (Online)', label: 'Virtual' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        placementEvent === option.value
                          ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                          : 'border-white/10 hover:border-[#4A5FE7]/40'
                      }`}
                    >
                      <RadioGroupItem value={option.value} className="border-gray-400" />
                      <span className="text-sm text-gray-300">{option.label}</span>
                    </label>
                  ))}
                </RadioGroup>
                {errors.placementEvent && (
                  <p className="text-sm text-red-400">
                    {errors.placementEvent}
                  </p>
                )}
              </div>

              {/* Graduation Year */}
              <div className="space-y-2">
                <Label htmlFor="graduationYear" className="text-gray-300">
                  Graduation Year <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="graduationYear"
                  type="number"
                  placeholder="e.g., 2024"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                  min="2020"
                  max="2030"
                />
                {errors.graduationYear && (
                  <p className="text-sm text-red-400">{errors.graduationYear}</p>
                )}
              </div>

              {/* Paid Program Confirmation */}
              <div className="space-y-3">
                <Label className="text-gray-300">
                  Paid Program Confirmation <span className="text-red-400">*</span>
                </Label>
                <p className="text-xs text-gray-500 -mt-1">
                  Please confirm that you understand this is a paid program for serious candidates only.
                </p>
                <RadioGroup
                  value={paidProgramConfirm}
                  onValueChange={setPaidProgramConfirm}
                  className="flex gap-4"
                >
                  {['I confirm'].map((option) => (
                    <label
                      key={option}
                      className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                        paidProgramConfirm === option
                          ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                          : 'border-white/10 hover:border-[#4A5FE7]/40'
                      }`}
                    >
                      <RadioGroupItem value={option} className="border-gray-400" />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </RadioGroup>
                {errors.paidProgramConfirm && (
                  <p className="text-sm text-red-400">{errors.paidProgramConfirm}</p>
                )}
              </div>

              {/* Info Box */}
              <div className="bg-[#4A5FE7]/10 border border-[#4A5FE7]/20 rounded-lg p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-[#4A5FE7]">✓</span> Thank you for being referred by one of our influencers! We'll prioritize your application.
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full text-base py-6 bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
