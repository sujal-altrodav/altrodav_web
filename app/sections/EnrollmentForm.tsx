'use client'

import { ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function EnrollmentForm() {

  return (
    <section id="enroll" className="py-24 bg-[#0B0D1A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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

        {/* Enrollment Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* General Enrollment Card */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#4A5FE7]/50 transition-all hover:shadow-lg hover:shadow-[#4A5FE7]/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center gap-2">
                <ArrowRight className="w-5 h-5 text-[#4A5FE7]" />
                Direct Application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300">
                Apply directly to join our Industry Immersive Program. Complete the form and our team will review your application.
              </p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>✓ Flexible enrollment</li>
                <li>✓ All tracks available</li>
                <li>✓ Various modes</li>
              </ul>
              <Link href="/enroll-general">
                <Button className="w-full text-base py-6 bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90">
                  Start Application
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Influencer Registration Card */}
          <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#4A5FE7]/50 transition-all hover:shadow-lg hover:shadow-[#4A5FE7]/20">
            <CardHeader className="pb-4">
              <CardTitle className="text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-[#4A5FE7]" />
                Influencer Registration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-300">
                Referred by one of our influencers? Register through their referral and get prioritized support.
              </p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>✓ Prioritized review</li>
                <li>✓ Special benefits</li>
                <li>✓ Dedicated support</li>
              </ul>
              <Link href="/enroll-influencer">
                <Button className="w-full text-base py-6 bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
