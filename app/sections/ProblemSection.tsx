'use client'

import { FiBookOpen, FiEyeOff, FiUsers, FiXCircle } from 'react-icons/fi'

const PROBLEMS = [
  { icon: FiBookOpen, title: 'Outdated Curriculum', desc: 'College syllabi lag years behind actual industry requirements, leaving students unprepared for modern tech roles.' },
  { icon: FiEyeOff, title: 'No Industry Exposure', desc: 'Students graduate without real-world project experience, making it hard to demonstrate practical skills to employers.' },
  { icon: FiUsers, title: 'Generic Interview Prep', desc: 'One-size-fits-all placement training ignores the specialized skills needed for different engineering domains.' },
  { icon: FiXCircle, title: 'Limited Company Access', desc: 'Most colleges attract only a handful of recruiting companies, severely limiting career options for graduates.' },
]

export default function ProblemSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why Traditional Placements Fall Short</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The current campus placement system is broken. Here is why students struggle to land the roles they deserve.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {PROBLEMS.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4A5FE7] to-[#00BCD4] rounded-l-2xl" />
                <div className="flex items-start gap-4 pl-3">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">{p.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
