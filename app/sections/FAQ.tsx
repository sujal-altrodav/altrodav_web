'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'How long is the Altrodav program?',
    a: 'The Altrodav program is a comprehensive 3-month intensive course. Month 1 focuses on foundation and core skills, Month 2 on advanced projects and specialization, and Month 3 on interview preparation and placement readiness. The 2-Day Mega Placement Event happens at the end of Month 3.',
  },
  {
    q: 'Who is eligible to enroll?',
    a: 'The program is open to engineering students in their pre-final or final year from any recognized university. Students from all branches of engineering are welcome. You should have a basic understanding of programming in at least one language.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Candidates who complete the 90-day Training Phase with at least 80% attendance and a 75% average score on tasks and assessments are eligible for a full refund if they do not secure a job offer during the following 90-day Placement Opportunity Window. Refund requests may be submitted only after day 180 to support@altrodav.com, and will be processed within 30 days to the original payment account.',
  },
  {
    q: 'Is placement guaranteed?',
    a: 'We have a 95% placement rate across all batches. While we cannot legally guarantee placement, our track record speaks for itself. Students who complete the program and meet all criteria have an extremely high probability of receiving offers during the 2-Day Mega Placement Event.',
  },
  {
    q: 'What is the class schedule like?',
    a: 'Weekday sessions include project work, mentor office hours, and mock tests. Weekend sessions include live lectures, Q&A, and practice. The schedule is designed to be compatible with regular college hours.',
  },
  {
    q: 'Are there any prerequisites?',
    a: 'Basic programming knowledge in any language (C, C++, Java, or Python) is recommended. You should be comfortable with variables, loops, functions, and basic data structures. Track-specific prerequisites vary but our Month 1 curriculum includes foundation modules to bring everyone up to speed.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes, all students who complete the program receive an Altrodav Certificate of Completion. This is an industry-recognized credential that validates your technical skills, project portfolio, and placement readiness.',
  },
  {
    q: 'What payment options are available?',
    a: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and EMI options. We also offer a 3-installment payment plan at no extra cost. Corporate or college-sponsored enrollments have special billing options.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#7B93FF] mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-3">Everything you need to know about the Altrodav program.</p>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i
            return (
              <div key={i} className={`bg-white/5 border rounded-2xl transition-colors ${isOpen ? 'border-[#4A5FE7]/30' : 'border-white/10'}`}>
                <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
