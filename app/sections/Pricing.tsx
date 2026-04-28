'use client'

import { FiCheck, FiShield, FiStar } from 'react-icons/fi'
import { Badge } from '@/components/ui/badge'

interface PricingTier {
  name: string
  popular?: boolean
  prices: { label: string; price: string }[]
  features: string[]
}

const TIERS: PricingTier[] = [
  {
    name: 'Program + Placement Event',
    popular: true,
    prices: [{ label: '', price: '90,000' }],
    features: ['Full track curriculum access', 'Live instructor-led sessions', 'Hands-on projects & assignments', 'Weekly mentor sessions', 'Certificate of completion', '2-Day Mega Placement Event access', 'Resume & portfolio review', 'Mock interview sessions', 'Company-specific preparation', 'Placement guarantee*', '1-on-1 career counseling', 'Priority mentor access'],
  },
]

export default function Pricing() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Invest in your career with our affordable programs. All prices include GST.</p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 mb-10 max-w-2xl mx-auto">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`bg-white border rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:shadow-lg ${tier.popular ? 'border-[#4A5FE7] shadow-xl shadow-[#4A5FE7]/10 scale-[1.02]' : 'border-gray-100'}`}>
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4A5FE7] text-white border-0 hover:bg-[#4A5FE7]">
                  <FiStar size={12} className="mr-1" /> Most Popular
                </Badge>
              )}
              <h3 className="text-lg font-semibold mb-4 text-gray-900">{tier.name}</h3>
              <div className="space-y-1 mb-6">
                {Array.isArray(tier?.prices) && tier.prices.map((p) => (
                  <div key={p.label} className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gray-900">&#8377;{p.price}</span>
                    {p.label && <span className="text-sm text-gray-400">{p.label}</span>}
                  </div>
                ))}
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {Array.isArray(tier?.features) && tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                    <span className="text-gray-600">{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => scrollTo('#enroll')} className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${tier.popular ? 'bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex items-center gap-4 justify-center text-center">
          <FiShield className="text-green-600 flex-shrink-0" size={24} />
          <div>
            <p className="font-semibold text-green-700">100% Refund Guarantee</p>
            <p className="text-sm text-green-600/80">Complete the program, meet all criteria, and if you are not placed, we refund your entire fee. No questions asked.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
