'use client'

import { FiShield, FiBriefcase, FiTrendingUp, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient - updated to match logo theme */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f4e]/60 via-[#0B0D1A] to-[#0B0D1A]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4A5FE7]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00BCD4]/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-[#4CAF50]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium bg-[#4A5FE7]/10 text-[#7B93FF] border border-[#4A5FE7]/20">
            <span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse" />
            Applications Open for 2026 Batch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Your Career Journey,{' '}
            <span className="bg-gradient-to-r from-[#4A5FE7] via-[#00BCD4] to-[#4CAF50] bg-clip-text text-transparent">
              Starts at Placemux.
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
            India&apos;s top campus-to-career acceleration platform. A 3-month intensive program that transforms engineering students into industry-ready professionals with guaranteed placement opportunities.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('#enroll')} className="group px-8 py-3.5 rounded-lg font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-all text-sm flex items-center gap-2">
              Explore Programs <FiArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
            </button>
            <button onClick={() => scrollTo('#program')} className="px-8 py-3.5 rounded-lg font-semibold border border-white/15 text-white hover:bg-white/5 transition-colors text-sm">
              How It Works
            </button>
          </div>
          <div className="flex flex-wrap gap-6 pt-2">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiShield className="text-[#4CAF50]" size={16} />
              <span>100% Refund Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiBriefcase className="text-[#4A5FE7]" size={16} />
              <span>100+ Companies</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiTrendingUp className="text-[#00BCD4]" size={16} />
              <span>95% Placement Rate</span>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute w-72 h-72 bg-[#4A5FE7]/20 rounded-full blur-[80px]" />
          <div className="relative space-y-5 w-full max-w-sm">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4CAF50] to-[#009688] flex items-center justify-center">
                  <FiBriefcase className="text-white" size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Latest Offer</p>
                  <p className="font-semibold text-sm text-white">Software Engineer</p>
                </div>
              </div>
              <p className="text-3xl font-bold font-mono text-[#4CAF50]">24 LPA</p>
              <p className="text-xs text-gray-500 mt-1">BlackRock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
