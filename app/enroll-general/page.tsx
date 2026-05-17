import React from 'react'
import Navbar from '@/app/sections/Navbar'
import GeneralEnrollmentForm from '@/app/sections/GeneralEnrollmentForm'
import Footer from '@/app/sections/Footer'

export const metadata = {
  title: 'General Enrollment - Altrodav',
  description: 'Join our Industry Immersive Program through direct application',
}

export default function GeneralEnrollmentPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <div className="bg-[#0B0D1A] text-white">
        <GeneralEnrollmentForm />
      </div>
      <div className="bg-[#060812] text-white">
        <Footer />
      </div>
    </div>
  )
}
