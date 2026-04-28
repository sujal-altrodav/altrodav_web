'use client'

import { FiCode, FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi'

const FEATURES = [
  { icon: FiCode, title: 'Real Dev Tasks', desc: 'Work on production-grade projects from day one, building a portfolio that impresses hiring managers.', color: 'bg-blue-50 text-[#4A5FE7]' },
  { icon: FiAward, title: 'MAANG Mentors', desc: 'Learn directly from engineers at Meta, Amazon, Apple, Netflix, and Google through live sessions.', color: 'bg-amber-50 text-amber-600' },
  { icon: FiCalendar, title: 'Mega Placement Event', desc: 'A 48-hour event where 100+ companies compete to hire our graduates through a unique bidding system.', color: 'bg-pink-50 text-pink-600' },
  { icon: FiCheckCircle, title: 'Guaranteed Outcomes', desc: '95% placement rate with a 100% refund guarantee if you complete the program and are not placed.', color: 'bg-green-50 text-green-600' },
]

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">The Placemux Difference</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            A Complete Career Acceleration Ecosystem
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Placemux combines rigorous technical training, real-world project experience, and direct access to 100+ hiring companies in a single 3-month program.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
