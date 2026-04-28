'use client'

import { useState } from 'react'
import { FiChevronDown, FiChevronUp, FiBookOpen, FiCode, FiTarget } from 'react-icons/fi'

interface Phase {
  month: string
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  color: string
  summary: string
  details: string[]
}

const PHASES: Phase[] = [
  {
    month: 'Month 1', title: 'Foundation & Core Skills', icon: FiBookOpen, color: 'from-[#4A5FE7] to-[#6B46C1]',
    summary: 'Build strong technical fundamentals in your chosen track with hands-on exercises and daily coding challenges.',
    details: ['Core language & framework mastery', 'Daily coding challenges & assignments', 'Weekly mentor-led doubt sessions', 'Foundation project submission', 'Peer code reviews & collaboration'],
  },
  {
    month: 'Month 2', title: 'Advanced Projects & Specialization', icon: FiCode, color: 'from-[#4A5FE7] to-[#00BCD4]',
    summary: 'Dive deep into specialization areas and build production-grade projects that showcase your abilities.',
    details: ['Advanced topic deep-dives', '2 industry-grade projects', 'MAANG mentor sessions', 'System design fundamentals', 'Technical blog writing'],
  },
  {
    month: 'Month 3', title: 'Interview Prep & Placement', icon: FiTarget, color: 'from-purple-500 to-pink-500',
    summary: 'Intensive interview preparation with mock interviews, resume building, and soft skills training.',
    details: ['DSA & problem-solving sprints', 'Mock interviews with industry panels', 'Resume & portfolio optimization', 'Soft skills & communication training', 'Company-specific preparation'],
  },
]

const SCHEDULE = {
  weekday: { title: 'Weekday Schedule', items: ['6:00 PM - 7:30 PM: Live Lecture', '7:30 PM - 8:00 PM: Q&A Session', '8:00 PM - 9:00 PM: Lab / Practice'] },
  weekend: { title: 'Weekend Schedule', items: ['10:00 AM - 12:00 PM: Project Work', '12:00 PM - 1:00 PM: Mentor Office Hours', '2:00 PM - 4:00 PM: Mock Tests / Reviews'] },
}

export default function ProgramTimeline() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section id="program" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#7B93FF] mb-3">Program Structure</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">3-Month Program Timeline</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A structured, intensive curriculum designed to take you from fundamentals to placement-ready in 12 weeks.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {PHASES.map((phase, idx) => {
            const Icon = phase.icon
            const isOpen = expanded === idx
            return (
              <div key={phase.month} className="relative">
                {idx < 2 && <div className="hidden md:block absolute top-12 -right-3 w-6 text-gray-600 text-2xl z-10">&rarr;</div>}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-[#4A5FE7]/30 transition-colors">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white mb-4`}>
                    <Icon size={22} />
                  </div>
                  <p className="text-xs font-mono text-gray-500 mb-1">{phase.month}</p>
                  <h3 className="text-lg font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{phase.summary}</p>
                  <button onClick={() => setExpanded(isOpen ? null : idx)} className="flex items-center gap-1 text-sm text-[#7B93FF] hover:text-[#00BCD4] transition-colors">
                    {isOpen ? 'Show Less' : 'Show Details'}
                    {isOpen ? <FiChevronUp size={14} /> : <FiChevronDown size={14} />}
                  </button>
                  {isOpen && (
                    <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                      {Array.isArray(phase?.details) && phase.details.map((d) => (
                        <li key={d} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A5FE7] mt-1.5 flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.values(SCHEDULE).map((sched) => (
            <div key={sched.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold mb-4">{sched.title}</h4>
              <div className="space-y-3">
                {Array.isArray(sched?.items) && sched.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-[#4A5FE7] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
