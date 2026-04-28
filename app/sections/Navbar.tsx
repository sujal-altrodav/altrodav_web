'use client'

import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const NAV_LINKS = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Program', href: '#program' },
  { label: 'Placement', href: '#placement' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0D1A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => handleNav('#hero')} className="flex items-center gap-2">
          <img src="/logo2.png" alt="PlaceMux" className="h-9 w-auto object-contain" />
        </button>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button key={link.href} onClick={() => handleNav(link.href)} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <button onClick={() => handleNav('#enroll')} className="px-6 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-opacity">
            Enroll Now
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B0D1A]/98 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button key={link.href} onClick={() => handleNav(link.href)} className="text-sm text-gray-400 hover:text-white transition-colors text-left">
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav('#enroll')} className="px-6 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white text-center">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
