'use client'

export default function StudentOutcomes() {
  return (
    <section id="outcomes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-[0.35em] uppercase bg-gradient-to-r from-[#6C63FF] via-[#7C4DFF] to-[#F73AEE] bg-clip-text text-transparent mb-4">
            Real Outcomes
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-950">
            Our Students Are Getting Real Offers
          </h2>
          <p className="text-xl font-semibold text-[#6C63FF] mt-4">
            Many more and counting!
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <img src="/placed.png" alt="Placed offers" className="w-full rounded-[2rem] border border-slate-200 shadow-sm object-cover" />
        </div>
      </div>
    </section>
  )
}
