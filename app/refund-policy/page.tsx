'use client'

import Link from 'next/link'
import Navbar from '../sections/Navbar'

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20 px-4 pb-16 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7B93FF]">
            Money-Back Guarantee
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Refund Policy
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg">
            This policy outlines the performance-based refund eligibility for candidates enrolled in the 90-day Industry Immersion Program (IIP) operated by Altrodav Technologies Pvt. Ltd.
          </p>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Program Timeline</h2>
            <p className="text-gray-300 leading-relaxed">
              The total journey consists of two consecutive 90-day phases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Phase 1 (Day 1 – 90):</strong> Upskill and Training Period.
              </li>
              <li>
                <strong>Phase 2 (Day 91 – 180):</strong> Placement Opportunity Window.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. Mandatory Refund Eligibility Criteria</h2>
            <p className="text-gray-300 leading-relaxed">
              To be eligible for a full refund under the job guarantee, every candidate must strictly satisfy the following performance benchmarks during the 90-day Training Phase:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Attendance:</strong> Maintain 80% or above attendance across all scheduled sessions and classes throughout the training period.
              </li>
              <li>
                <strong>Performance Score:</strong> Achieve an average score of 75% or above in all Daily Tasks and assessments.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. The Placement Opportunity Window</h2>
            <p className="text-gray-300 leading-relaxed">
              Upon successful completion of the initial 90-day training/upskill program, candidates enter the Placement Phase. Altrodav provides placement events and job opportunities for the subsequent 90 days.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Refund Activation &amp; Procedure</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-300">
              <li>
                <strong>Eligibility:</strong> An eligible candidate who meets the attendance and task score requirements and is unable to secure a job offer within the 90-day placement window is entitled to a full refund of paid fees.
              </li>
              <li>
                <strong>When to Apply:</strong> Refund requests may be raised only after the full 90-day placement window has concluded (after the 180th day from the program start).
              </li>
              <li>
                <strong>How to Apply:</strong> Send a formal request to <a href="mailto:support@altrodav.com" className="text-[#7B93FF] hover:underline">support@altrodav.com</a>.
              </li>
              <li>
                <strong>Processing Timeline:</strong> Once eligibility is verified, the refund process will be completed within 30 days.
              </li>
              <li>
                <strong>Payment Method:</strong> The total amount will be refunded to the same bank account used during enrollment.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Important Note</h2>
            <p className="text-gray-300 leading-relaxed">
              Failure to meet the minimum 80% attendance or the 75% average task score during the first 90 days will disqualify a candidate from refund eligibility, regardless of placement outcome.
            </p>
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
