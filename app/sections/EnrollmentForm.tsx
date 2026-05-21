'use client'

import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function EnrollmentForm() {
  const [hasReferral, setHasReferral] = useState(false)

  // Check if user has referral parameter
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      const refParam = params.get('ref')
      if (refParam) {
        setHasReferral(true)
      }
    }
  }, [])

  return (
    <section id="enroll" className="py-24 bg-[#0B0D1A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#7B93FF] mb-3">
            Enrollment
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {hasReferral ? (
              <>
                Choose Your{' '}
                <span className="bg-gradient-to-r from-[#4A5FE7] via-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
                  Application Path
                </span>
              </>
            ) : (
              <>
                Start Your{' '}
                <span className="bg-gradient-to-r from-[#4A5FE7] via-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
                  Journey
                </span>
              </>
            )}
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            {hasReferral
              ? 'Select how you\'d like to join the Industry Immersive Program'
              : 'Complete your application to join our Industry Immersive Program'}
          </p>
        </div>

        {/* Enrollment Options Grid */}
        <div className={`grid ${hasReferral ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4 max-w-2xl mx-auto`}>
          {/* General Enrollment Card */}
          <Card className="border-white/20 bg-white/10 backdrop-blur-md hover:border-[#4A5FE7]/60 transition-all hover:shadow-lg hover:shadow-[#4A5FE7]/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-base md:text-lg text-white flex items-center gap-2">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#4A5FE7] flex-shrink-0" />
                Apply now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5">
              <p className="text-xs md:text-sm text-white leading-snug">
                Apply directly to join our Industry Immersive Program. Complete the form and our team will review your application.
              </p>
              <ul className="text-xs text-white space-y-1">
                <li className="flex items-center gap-2">
                  <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                  <span>Flexible enrollment</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                  <span>All tracks available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                  <span>Various modes</span>
                </li>
              </ul>
              <Link href="/enroll-general" className="block pt-2">
                <Button className="w-full text-xs md:text-sm py-4 md:py-5 bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-opacity">
                  Start Application
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Influencer Registration Card - Only visible with referral */}
          {hasReferral && (
            <Card className="border-white/20 bg-white/10 backdrop-blur-md hover:border-[#4A5FE7]/60 transition-all hover:shadow-lg hover:shadow-[#4A5FE7]/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-base md:text-lg text-white flex items-center gap-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-[#4A5FE7] flex-shrink-0" />
                  Influencer Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2.5">
                <p className="text-xs md:text-sm text-white leading-snug">
                  Referred by one of our influencers? Register through their referral and get prioritized support.
                </p>
                <ul className="text-xs text-white space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                    <span>Prioritized review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                    <span>Special benefits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#4A5FE7] font-bold text-sm">✓</span>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <Link href="/enroll-influencer" className="block pt-2">
                  <Button className="w-full text-xs md:text-sm py-4 md:py-5 bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-opacity">
                    Register Now
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}
