'use client'

import { FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi'

const PROGRAM_LINKS = [
  'AI/ML Engineering',
  'Data Analytics',
  'Full Stack MERN',
  'Android/iOS Dev',
  'DevOps Engineering',
]

const RESOURCE_LINKS = [
  'Blog',
  'Career Guide',
  'Student Stories',
  'Webinars',
  'Events',
]

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <img
              src="/logo2.png"
              alt="PlaceMux"
              className="h-9 w-auto object-contain mb-4"
            />

            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              Accelerating campus-to-career transitions for engineering students
              across India.
            </p>

            <div className="flex gap-3">
              {[FiTwitter, FiLinkedin, FiInstagram, FiYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#00BCD4] hover:bg-white/10 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm">Program</p>
            <ul className="space-y-2.5">
              {PROGRAM_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#tracks"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm">Resources</p>
            <ul className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4 text-sm">Contact</p>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li>contact@placemux.com</li>
              <li>+91 7022665938</li>
              <li>
                Devarabisanahalli, Bellandur, Bangalore South, Karnataka –
                560103
              </li>
              <li>Mon - Sat, 10 AM - 6 PM IST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 relative">
          <p className="text-xs text-gray-600 text-center">
            ©️ 2024 Placemux by Altrodav Technologies Pvt Ltd. All rights reserved.
          </p>

          <div className="mt-4 sm:mt-0 sm:absolute sm:right-0 sm:top-8 flex justify-center sm:justify-end gap-6">
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
