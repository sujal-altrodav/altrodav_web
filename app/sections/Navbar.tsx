'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Tracks', href: '#tracks' },
  { label: 'Program', href: '#program' },
  { label: 'Placement', href: '#placement' },
  { label: 'Outcomes', href: '#outcomes' },
  // { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B0D1A]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/#hero" className="flex items-center gap-2">
          <Image src="/alt_logo.png" alt="Altrodav" width={144} height={36} className="h-9 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={`/${link.href}`} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/#enroll" className="px-6 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-opacity">
            Enroll Now
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B0D1A]/98 backdrop-blur-xl border-b border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={`/${link.href}`} className="text-sm text-gray-400 hover:text-white transition-colors text-left">
                {link.label}
              </Link>
            ))}
            <Link href="/#enroll" className="px-6 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white text-center">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
