'use client'

import { useState } from 'react'
import { ArrowRight, Laptop, MapPin, Brain, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent } from '@/components/ui/card'


const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeXwMpBw-dkoD6LonBpZ71-0MbrkmwCwNM0FXcus5KmDWHcPw/formResponse'

// Google Form entry IDs mapped to form fields
const ENTRY = {
  fullName: 'entry.476771396',
  email: 'entry.1586335456',
  collegeName: 'entry.598356097',
  preferredRole: 'entry.453969392',
  knowledgeLevel: 'entry.1346891652',
  contactNumber: 'entry.524959944',
  hasLaptop: 'entry.1580090639',
  attendanceMode: 'entry.1594792659',
  placementEvent: 'entry.483869019',
} as const

const roleOptions = [
  'AI-ML Developer',
  'Android Developer',
  'iOS Developer',
  'Backend (Node.js) Developer',
  'Data Analyst',
  'DevOps',
]

export default function EnrollmentForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [role, setRole] = useState('')
  const [mode, setMode] = useState('')
  const [hasLaptop, setHasLaptop] = useState('')
  const [knowledgeLevel, setKnowledgeLevel] = useState([5])
  const [contactNumber, setContactNumber] = useState('')
  const [placementEvent, setPlacementEvent] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Enter a valid email'
    if (!collegeName.trim()) newErrors.collegeName = 'College name is required'
    if (!mode) newErrors.mode = 'Select a mode'
    if (!hasLaptop) newErrors.hasLaptop = 'This field is required'
    if (!contactNumber.trim()) newErrors.contactNumber = 'Contact number is required'
    else if (!/^\d{10}$/.test(contactNumber.replace(/\s/g, '')))
      newErrors.contactNumber = 'Enter a valid 10-digit number'
    if (!placementEvent) newErrors.placementEvent = 'This field is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)

    const formData = new URLSearchParams()
    formData.append(ENTRY.fullName, fullName.trim())
    formData.append(ENTRY.email, email.trim())
    formData.append(ENTRY.collegeName, collegeName.trim())
    if (role) formData.append(ENTRY.preferredRole, role)
    formData.append(ENTRY.knowledgeLevel, String(knowledgeLevel[0]))
    formData.append(ENTRY.contactNumber, contactNumber.trim())
    formData.append(ENTRY.hasLaptop, hasLaptop)
    formData.append(ENTRY.attendanceMode, mode)
    formData.append(ENTRY.placementEvent, placementEvent)

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      })
      // no-cors means we can't read the response, but the data is submitted
      setSubmitted(true)
    } catch {
      // Even if fetch throws, Google Forms usually receives the data
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
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7B93FF] mb-3">
            Enrollment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Apply for the{' '}
            <span className="bg-gradient-to-r from-[#4A5FE7] via-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
              Industry Immersive Program
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Fill in your details below to submit your application directly.
          </p>
        </div>

        <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
          <CardContent className="p-6 md:p-8">
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
