'use client'

import { FiCheck, FiArrowRight, FiDownload } from 'react-icons/fi'

const VALUE_PROPS = [
  'Boost your college placement statistics dramatically',
  'Access to 100+ hiring companies through our network',
  'Industry-aligned curriculum designed with MAANG engineers',
  'Dedicated placement coordinator for your institution',
  'Real-time student progress tracking & analytics dashboard',
  'Custom branding for your college at placement events',
]

export default function ForColleges() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="colleges" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">Partnerships</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">For Colleges & Institutions</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Partner with Placemux to transform your campus placement outcomes and give your students a competitive edge.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Why Colleges Choose Placemux</h3>
            {VALUE_PROPS.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiCheck className="text-green-600" size={12} />
                </div>
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-2.5 rounded-lg font-semibold border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm flex items-center gap-2">
                <FiDownload size={14} /> Download Brochure
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 mb-6 shadow-lg">
                <img
                  src="/cr.png"
                  alt="Dr. Chiranjiv Roy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">Dr. Chiranjiv Roy</h4>

            </div>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 mb-1 font-semibold">Education</p>
                <p className="text-sm text-gray-700 font-medium">PhD, Computer Science - IIT Delhi</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 mb-1 font-semibold">Experience</p>
                <p className="text-sm text-gray-700 font-medium">15+ years in academia and industry</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-xs text-gray-400 mb-1 font-semibold">Accomplishments</p>
                <p className="text-sm text-gray-700 font-medium">Placed 5000+ students across 200+ companies. Former VP of Engineering at a Fortune 500 company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
