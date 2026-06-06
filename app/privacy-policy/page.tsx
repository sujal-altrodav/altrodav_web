'use client'

import Link from 'next/link'
import Navbar from '../sections/Navbar'

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20 px-4 pb-16 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7B93FF]">
            Privacy & Data Protection
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg">
            Altrodav Technologies Pvt. Ltd. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, enroll in our 90-day Industry Immersion Program (IIP), or use our campus-to-career platform.
          </p>
          <p className="text-sm text-gray-400">Last Updated: June 2026</p>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Personal Data:</strong> Your name, shipping address, email address, telephone number, and academic/professional background (college name, degree, resume details) that you voluntarily provide when you enroll or request information.
              </li>
              <li>
                <strong>Financial Data:</strong> Payment information such as credit card number, card brand, expiration date, and bank account details when you purchase, order, return, exchange, or request information about our services. Most financial data is transferred directly to our payment processors.
              </li>
              <li>
                <strong>Academic & Performance Data:</strong> Attendance records, assessment scores, daily task submissions, and project code repositories tracked during Phase 1 (Training) to determine course completion and refund eligibility.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Having accurate information about you permits us to provide a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Create and manage your student account and dashboard.</li>
              <li>Monitor and analyze your progress, attendance, and scores for Refund Policy compliance.</li>
              <li>Share your resume and performance profiles with hiring partners during the Phase 2 Placement Window.</li>
              <li>Process payments, refunds, and prevent fraudulent transactions.</li>
              <li>Send you course updates, certificates, and marketing communications.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Disclosure of Your Information</h2>
            <p className="text-gray-300 leading-relaxed">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>With Hiring Partners &amp; Corporate Recruiters:</strong> To facilitate job placements, we share your academic scores, resume, and project portfolios with the companies participating in our reverse-auction hiring events.
              </li>
              <li>
                <strong>By Law or to Protect Rights:</strong> If we believe the release of information is necessary to respond to legal process or investigate potential violations of our policies.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, and customer service.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Data Security &amp; Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide, no security measures are perfect or impenetrable.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill your training, handle the 180-day placement cycle, manage refund queries, or comply with statutory legal requirements under the Indian Information Technology Act, 2000.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Your Rights &amp; Options</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Access and Rectification:</strong> You can request a copy of your data or ask us to correct inaccurate information by logging into your student dashboard.
              </li>
              <li>
                <strong>Account Deletion:</strong> You may request that we delete your account and personal details by contacting support. Deleting your account during the 180-day program will immediately forfeit your placement support and refund eligibility.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-300">Altrodav Technologies Pvt. Ltd.</p>
            <p className="text-[#7B93FF]">Email: support@altrodav.com</p>
          </div>
        </section>

        <div className="flex justify-start">
          <Link href="/" className="inline-flex items-center rounded-full bg-[#7B93FF] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#667de0]">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
