'use client'

import { useState } from 'react'
import { ArrowRight, Laptop, MapPin, Brain, CheckCircle2, Loader2, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


// General Enrollment Form
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSeXwMpBw-dkoD6LonBpZ71-0MbrkmwCwNM0FXcus5KmDWHcPw/formResponse'

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

// Influencer Enrollment Form
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
  const [enrollmentType, setEnrollmentType] = useState('general')
  
  // General enrollment fields
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [role, setRole] = useState('')
  const [mode, setMode] = useState('')
  const [hasLaptop, setHasLaptop] = useState('')
  const [knowledgeLevel, setKnowledgeLevel] = useState([5])
  const [contactNumber, setContactNumber] = useState('')
  const [placementEvent, setPlacementEvent] = useState('')
  
  // Influencer enrollment fields
  const [influencerFullName, setInfluencerFullName] = useState('')
  const [influencerEmail, setInfluencerEmail] = useState('')
  const [influencerCollegeName, setInfluencerCollegeName] = useState('')
  const [influencerRole, setInfluencerRole] = useState('')
  const [influencerKnowledgeLevel, setInfluencerKnowledgeLevel] = useState([5])
  const [influencerContactNumber, setInfluencerContactNumber] = useState('')
  const [influencerHasLaptop, setInfluencerHasLaptop] = useState('')
  const [influencerMode, setInfluencerMode] = useState('')
  const [influencerPlacementEvent, setInfluencerPlacementEvent] = useState('')
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validateGeneral = () => {
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

  const validateInfluencer = () => {
    const newErrors: Record<string, string> = {}
    if (!influencerFullName.trim()) newErrors.influencerFullName = 'Full name is required'
    if (!influencerEmail.trim()) newErrors.influencerEmail = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(influencerEmail))
      newErrors.influencerEmail = 'Enter a valid email'
    if (!influencerCollegeName.trim()) newErrors.influencerCollegeName = 'College name is required'
    if (!influencerContactNumber.trim()) newErrors.influencerContactNumber = 'Contact number is required'
    else if (!/^\d{10}$/.test(influencerContactNumber.replace(/\s/g, '')))
      newErrors.influencerContactNumber = 'Enter a valid 10-digit number'
    if (!influencerHasLaptop) newErrors.influencerHasLaptop = 'This field is required'
    if (!influencerMode) newErrors.influencerMode = 'Select a mode'
    if (!influencerPlacementEvent) newErrors.influencerPlacementEvent = 'This field is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateGeneral()) return

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
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const handleInfluencerSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateInfluencer()) return

    setSubmitting(true)

    const formData = new URLSearchParams()
    formData.append(ENTRY_INFLUENCER.fullName, influencerFullName.trim())
    formData.append(ENTRY_INFLUENCER.email, influencerEmail.trim())
    formData.append(ENTRY_INFLUENCER.collegeName, influencerCollegeName.trim())
    if (influencerRole) formData.append(ENTRY_INFLUENCER.preferredRole, influencerRole)
    formData.append(ENTRY_INFLUENCER.knowledgeLevel, String(influencerKnowledgeLevel[0]))
    formData.append(ENTRY_INFLUENCER.contactNumber, influencerContactNumber.trim())
    formData.append(ENTRY_INFLUENCER.hasLaptop, influencerHasLaptop)
    formData.append(ENTRY_INFLUENCER.attendanceMode, influencerMode)
    formData.append(ENTRY_INFLUENCER.placementEvent, influencerPlacementEvent)

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

  const validate = () => {
    return enrollmentType === 'general' ? validateGeneral() : validateInfluencer()
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
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#4A5FE7] via-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
              Application Path
            </span>
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            Select how you'd like to join the Industry Immersive Program
          </p>
        </div>

        <Tabs
          value={enrollmentType}
          onValueChange={setEnrollmentType}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-white/5 border border-white/10 p-1 rounded-lg">
            <TabsTrigger
              value="general"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4A5FE7] data-[state=active]:to-[#00BCD4] data-[state=active]:text-white rounded"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              General Enrollment
            </TabsTrigger>
            <TabsTrigger
              value="influencer"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#4A5FE7] data-[state=active]:to-[#00BCD4] data-[state=active]:text-white rounded"
            >
              <Users className="w-4 h-4 mr-2" />
              Influencer Registration
            </TabsTrigger>
          </TabsList>

          {/* General Enrollment Form */}
          <TabsContent value="general">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#4A5FE7]" />
                  Direct Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGeneralSubmit} className="space-y-6">
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
          </TabsContent>

          {/* Influencer Enrollment Form */}
          <TabsContent value="influencer">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4A5FE7]" />
                  Registration via Influencer Referral
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInfluencerSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="influencerFullName" className="text-gray-300">
                      Full Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="influencerFullName"
                      placeholder="Enter your full name"
                      value={influencerFullName}
                      onChange={(e) => setInfluencerFullName(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                    />
                    {errors.influencerFullName && (
                      <p className="text-sm text-red-400">{errors.influencerFullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="influencerEmail" className="text-gray-300">
                      Email <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="influencerEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={influencerEmail}
                      onChange={(e) => setInfluencerEmail(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                    />
                    {errors.influencerEmail && (
                      <p className="text-sm text-red-400">{errors.influencerEmail}</p>
                    )}
                  </div>

                  {/* College Name */}
                  <div className="space-y-2">
                    <Label htmlFor="influencerCollegeName" className="text-gray-300">
                      College Name <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="influencerCollegeName"
                      placeholder="Enter your college name"
                      value={influencerCollegeName}
                      onChange={(e) => setInfluencerCollegeName(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                    />
                    {errors.influencerCollegeName && (
                      <p className="text-sm text-red-400">{errors.influencerCollegeName}</p>
                    )}
                  </div>

                  {/* Preferred Role */}
                  <div className="space-y-3">
                    <Label className="text-gray-300">Select the Preferred Role</Label>
                    <RadioGroup value={influencerRole} onValueChange={setInfluencerRole} className="grid grid-cols-2 gap-3">
                      {roleOptions.map((option) => (
                        <label
                          key={option}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                            influencerRole === option
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
                        value={influencerKnowledgeLevel}
                        onValueChange={setInfluencerKnowledgeLevel}
                        min={1}
                        max={10}
                        step={1}
                        className="bg-white/10"
                      />
                      <div className="flex justify-between text-xs text-gray-400 mt-1">
                        <span>1</span>
                        <span className="font-semibold text-gray-200 text-sm">
                          {influencerKnowledgeLevel[0]}
                        </span>
                        <span>10</span>
                      </div>
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="space-y-2">
                    <Label htmlFor="influencerContact" className="text-gray-300">
                      Contact Number <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="influencerContact"
                      placeholder="10-digit mobile number"
                      value={influencerContactNumber}
                      onChange={(e) => setInfluencerContactNumber(e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600"
                    />
                    {errors.influencerContactNumber && (
                      <p className="text-sm text-red-400">{errors.influencerContactNumber}</p>
                    )}
                  </div>

                  {/* Laptop */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-gray-300">
                      <Laptop className="w-4 h-4 text-[#4A5FE7]" />
                      Do you have a laptop with adequate specs & stable internet?{' '}
                      <span className="text-red-400">*</span>
                    </Label>
                    <RadioGroup value={influencerHasLaptop} onValueChange={setInfluencerHasLaptop} className="flex gap-4">
                      {['Yes', 'No'].map((option) => (
                        <label
                          key={option}
                          className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                            influencerHasLaptop === option
                              ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                              : 'border-white/10 hover:border-[#4A5FE7]/40'
                          }`}
                        >
                          <RadioGroupItem value={option} className="border-gray-400" />
                          <span className="text-sm text-gray-300">{option}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    {errors.influencerHasLaptop && (
                      <p className="text-sm text-red-400">{errors.influencerHasLaptop}</p>
                    )}
                  </div>

                  {/* Attendance Mode */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-[#4A5FE7]" />
                      Attendance Mode <span className="text-red-400">*</span>
                    </Label>
                    <RadioGroup value={influencerMode} onValueChange={setInfluencerMode} className="flex gap-4">
                      {['In Office', 'Virtual'].map((option) => (
                        <label
                          key={option}
                          className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                            influencerMode === option
                              ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                              : 'border-white/10 hover:border-[#4A5FE7]/40'
                          }`}
                        >
                          <RadioGroupItem value={option} className="border-gray-400" />
                          <span className="text-sm text-gray-300">{option}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    {errors.influencerMode && (
                      <p className="text-sm text-red-400">{errors.influencerMode}</p>
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
                      value={influencerPlacementEvent}
                      onValueChange={setInfluencerPlacementEvent}
                      className="flex gap-4"
                    >
                      {[
                        { value: 'Attend In-Person ( Offline)', label: 'In-Person' },
                        { value: 'Virtual (Online)', label: 'Virtual' },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex-1 flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-all ${
                            influencerPlacementEvent === option.value
                              ? 'border-[#4A5FE7] bg-[#4A5FE7]/10'
                              : 'border-white/10 hover:border-[#4A5FE7]/40'
                          }`}
                        >
                          <RadioGroupItem value={option.value} className="border-gray-400" />
                          <span className="text-sm text-gray-300">{option.label}</span>
                        </label>
                      ))}
                    </RadioGroup>
                    {errors.influencerPlacementEvent && (
                      <p className="text-sm text-red-400">
                        {errors.influencerPlacementEvent}
                      </p>
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
