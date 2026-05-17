import React from 'react'
import Navbar from '@/app/sections/Navbar'
import InfluencerEnrollmentForm from '@/app/sections/InfluencerEnrollmentForm'
import Footer from '@/app/sections/Footer'

export const metadata = {
  title: 'Influencer Registration - Altrodav',
  description: 'Register for our Industry Immersive Program via influencer referral',
}

export default function InfluencerEnrollmentPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <div className="bg-[#0B0D1A] text-white">
        <InfluencerEnrollmentForm />
      </div>
      <div className="bg-[#060812] text-white">
        <Footer />
      </div>
    </div>
  )
}
