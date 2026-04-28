'use client'

import { useState, useEffect, useRef } from 'react'

const STATS = [
  { value: 100, suffix: '+', label: 'Hiring Companies' },
  { value: 95, suffix: '%', label: 'Placement Rate' },
  { value: 50, suffix: '+', label: 'LPA Highest Package' },
  { value: 3, suffix: '', label: 'Month Program' },
  { value: 5, suffix: '+', label: 'Career Tracks' },
]

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let frame: number
    const duration = 1500
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [target, active])
  return count
}

export default function StatsBar() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} visible={visible} />
        ))}
      </div>
    </section>
  )
}

function StatItem({ stat, visible }: { stat: typeof STATS[number]; visible: boolean }) {
  const count = useCountUp(stat.value, visible)
  return (
    <div className="text-center">
      <p className="text-3xl sm:text-4xl font-bold font-mono text-white">
        {count}{stat.suffix}
      </p>
      <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
    </div>
  )
}
