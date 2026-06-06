'use client'

import Link from 'next/link'
import Navbar from '../sections/Navbar'

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-20 px-4 pb-16 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-10">
        <section className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7B93FF]">
            Terms of Service
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="text-gray-300 leading-relaxed text-lg">
            These Terms govern your access to and use of the website, applications, and the 3-month Industry Immersion Program (IIP) provided by Altrodav Technologies Pvt. Ltd.
          </p>
          <p className="text-sm text-gray-400">Last Updated: June 2026</p>
        </section>

        <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">1. Eligibility and Account Registration</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Age Requirement:</strong> You must be at least 18 years of age, or the age of majority in your jurisdiction, to enroll in our programs.
              </li>
              <li>
                <strong>Account Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration and application process. You are solely responsible for safeguarding your account credentials and for any activity under your account.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">2. The Industry Immersion Program (IIP)</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Program Structure:</strong> The IIP consists of a 90-day technical training phase (Phase 1) followed by a 90-day placement support phase (Phase 2).
              </li>
              <li>
                <strong>Modifications:</strong> Altrodav reserves the right to update curriculum materials, change schedules, or replace industry mentors to maintain the quality and relevance of the courses.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">3. Fees, Payments, and Financial Obligations</h2>
            <p className="text-gray-300 leading-relaxed">
              By enrolling in a track, you agree to pay the specified program fees. All fees must be paid via our authorized third-party payment gateways.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Refunds are strictly governed by our Refund Policy. To qualify for a 100% refund, you must meet the specified criteria during Phase 1.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Maintain a minimum of 80% attendance across all live sessions and mandatory meetings.</li>
              <li>Achieve an average score of 75% or higher on all daily tasks and scorecard assessments.</li>
              <li>Submit all required capstone and production-grade projects on time.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              Failure to meet any of the above criteria instantly voids your eligibility for a refund, regardless of subsequent job placement outcomes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">4. Intellectual Property Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <strong>Our Content:</strong> All course materials, including videos, coding challenges, lecture notes, proprietary software, design graphics, and website code, are the intellectual property of Altrodav or its licensors.
              </li>
              <li>
                <strong>Limited License:</strong> You are granted a limited, personal, non-exclusive, non-transferable license to access and view the materials solely for your personal educational use. You may not record, copy, redistribute, sell, or commercially exploit any Altrodav content.
              </li>
              <li>
                <strong>Student Submissions:</strong> Any project code or portfolios you build during the program remain your intellectual property. However, you grant Altrodav a non-exclusive license to showcase your projects and placement success for marketing and promotional purposes.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">5. Code of Conduct</h2>
            <p className="text-gray-300 leading-relaxed">
              Students are expected to maintain a professional, respectful learning environment. Altrodav reserves the right to terminate your access to the platform immediately, without a refund, if you engage in:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Academic dishonesty, plagiarism, or cheating on daily tasks and assessments.</li>
              <li>Cyberbullying, harassment, or using offensive language against mentors, staff, or fellow students.</li>
              <li>Sharing account access or distributing proprietary learning materials outside the platform.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">6. Placement Support &amp; Reverse-Auction Events</h2>
            <p className="text-gray-300 leading-relaxed">
              Participation in the 48-hour Mega Placement Event and interview scheduling during Phase 2 is conditional upon completing Phase 1 with a passing profile.
            </p>
            <p className="text-gray-300 leading-relaxed">
              While historical packages range from 4 LPA to 50+ LPA, Altrodav does not guarantee a specific salary figure or placement with a specific company. Offers are dependent on individual performance and industry market demand.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">7. Limitation of Liability &amp; Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              Altrodav provides its services on an "as-is" and "as-available" basis. We do not warrant that the platform will be entirely error-free or uninterrupted.
            </p>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by applicable law, Altrodav Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, or consequential damages resulting from your participation in the program or inability to secure employment. Our total liability to you for any claims shall not exceed the total amount of tuition fees paid by you.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">8. Governing Law and Jurisdiction</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of these Terms shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka, India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">9. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Continued use of the platform after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">10. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              For any legal inquiries regarding these Terms, please reach out to us at:
            </p>
            <p className="text-gray-300">Email: contact@altrodav.com</p>
            <p className="text-gray-300">Address: Devarabisanahalli, Bellandur, Bangalore South, Karnataka – 560103</p>
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
