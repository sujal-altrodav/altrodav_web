'use client'

import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import StatsBar from './sections/StatsBar'
import ProblemSection from './sections/ProblemSection'
import SolutionSection from './sections/SolutionSection'
import TracksSection from './sections/TracksSection'
import ProgramTimeline from './sections/ProgramTimeline'
import PlacementEvent from './sections/PlacementEvent'
import StudentOutcomes from './sections/StudentOutcomes'
import ForColleges from './sections/ForColleges'
import Pricing from './sections/Pricing'
import EnrollmentForm from './sections/EnrollmentForm'
import FAQ from './sections/FAQ'
import Footer from './sections/Footer'

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: '' }
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
            <p className="text-gray-500 mb-4 text-sm">{this.state.error}</p>
            <button onClick={() => this.setState({ hasError: false, error: '' })} className="px-4 py-2 bg-[#4A5FE7] text-white rounded-lg text-sm hover:bg-[#3A4FD7] transition-colors">
              Try again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default function Page() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen font-sans antialiased">
        <Navbar />
        {/* Dark section: Hero + Stats */}
        <div className="bg-[#0B0D1A] text-white">
          <Hero />
          <StatsBar />
        </div>
        {/* Light section: Problem + Solution */}
        <div className="bg-white text-gray-900">
          <ProblemSection />
          <SolutionSection />
        </div>
        {/* Slate section: Tracks */}
        <div className="bg-gray-50 text-gray-900">
          <TracksSection />
        </div>
        {/* Dark section: Timeline + Placement */}
        <div className="bg-[#0B0D1A] text-white">
          <ProgramTimeline />
          <PlacementEvent />
        </div>
        {/* Light section: Student Outcomes */}
        <div className="bg-white text-gray-900">
          <StudentOutcomes />
        </div>
        {/* Warm light: For Colleges */}
        <div className="bg-blue-50/50 text-gray-900">
          <ForColleges />
        </div>
        {/* White: Pricing */}
        <div className="bg-white text-gray-900">
          <Pricing />
        </div>
        {/* Dark section: Enrollment + FAQ */}
        <div className="bg-[#0B0D1A] text-white">
          <EnrollmentForm />
          <FAQ />
        </div>
        {/* Dark footer */}
        <div className="bg-[#060812] text-white">
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}
