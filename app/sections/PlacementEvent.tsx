
'use client'

import { FiMonitor, FiAward, FiCheck } from 'react-icons/fi'

const STEPS = [
  {
    icon: FiMonitor,
    day: 'Day 1',
    title: 'Present & Bid',
    desc: 'Students present their projects and portfolios to a panel of 100+ companies. Companies review profiles, shortlist candidates, and place competitive salary bids on their preferred talent.',
    color: 'from-[#4A5FE7] to-[#6B46C1]',
  },
  {
    icon: FiAward,
    day: 'Day 2',
    title: 'Offer',
    desc: 'Students review and accept their best offers. Final offer letters are issued on the spot with salaries ranging from 4 LPA to 50+ LPA.',
    color: 'from-purple-500 to-pink-500',
  },
]

const EVENT_STATS = [
  { value: '100+', label: 'Companies' },
  { value: '4 LPA', label: 'Starting Bid' },
  { value: '50+ LPA', label: 'Maximum' },
  { value: '48 Hrs', label: 'Duration' },
]

export default function PlacementEvent() {
  return (
    <section id="placement" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-pink-400 mb-3">
            The Main Event
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The 2-Day Mega Placement Event
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A revolutionary hiring event where companies compete for you.
            Experience the thrill of reverse-auction placements.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-14">
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((step, idx) => {
              const Icon = step.icon

              return (
                <div key={step.title} className="relative">
                  {idx < 1 && (
                    <div className="hidden md:block absolute top-10 -right-3 w-6 text-gray-600 text-2xl z-10">
                      &rarr;
                    </div>
                  )}

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center h-full hover:border-[#4A5FE7]/20 transition-colors">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      <Icon size={24} />
                    </div>

                    <p className="text-xs font-mono text-gray-500 mb-1">
                      {step.day}
                    </p>

                    <h3 className="text-xl font-bold mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {EVENT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
            >
              <p className="text-2xl font-bold font-mono bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="text-xs text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8">
          <p className="text-sm font-semibold text-gray-400">
            Eligibility:
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiCheck className="text-green-400" size={16} />
            <span>80% Attendance</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiCheck className="text-green-400" size={16} />
            <span>75% Scorecard</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FiCheck className="text-green-400" size={16} />
            <span>All Projects Submitted</span>
          </div>
        </div>
      </div>
    </section>
  )
}

