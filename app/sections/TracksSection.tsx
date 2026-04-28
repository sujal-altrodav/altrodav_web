'use client'

import { useState } from 'react'
import { FiArrowRight, FiClock, FiBookOpen, FiAward, FiCloud } from 'react-icons/fi'
import { SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiDocker, SiKubernetes, SiTerraform, SiFlutter, SiKotlin, SiSwift, SiFirebase, SiPandas, SiChartdotjs, SiPostgresql } from 'react-icons/si'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Track {
  name: string
  tagline: string
  desc: string
  salary: string
  duration: string
  projects: number
  color: string
  techIcons: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string }[]
  overview: string
  syllabus: { week: string; title: string; topics: string[] }[]
  projectList: string[]
  outcomes: string[]
}

const TRACKS: Track[] = [
  {
    name: 'AI/ML Engineering',
    tagline: 'Build intelligent systems that learn and adapt',
    desc: 'Master Python, TensorFlow, PyTorch, NLP, and Computer Vision to build production-ready ML pipelines and deploy models at scale.',
    salary: '8-50 LPA', duration: '12 Weeks', projects: 4,
    color: 'from-violet-500 to-purple-600',
    techIcons: [
      { icon: SiPython, label: 'Python' },
      { icon: SiTensorflow, label: 'TensorFlow' },
      { icon: SiPytorch, label: 'PyTorch' },
      { icon: SiScikitlearn, label: 'Scikit-learn' },
    ],
    overview: 'Master the fundamentals and advanced techniques of artificial intelligence and machine learning. Build production-ready ML pipelines, deploy models at scale, and work on cutting-edge NLP and computer vision projects.',
    syllabus: [
      { week: 'Week 1-2', title: 'Python & Math Foundations', topics: ['NumPy, Pandas, Matplotlib', 'Linear Algebra & Probability', 'Statistical Analysis'] },
      { week: 'Week 3-4', title: 'Classical ML', topics: ['Supervised Learning (Regression, Classification)', 'Unsupervised Learning (Clustering, PCA)', 'Model Evaluation & Hyperparameter Tuning'] },
      { week: 'Week 5-6', title: 'Deep Learning', topics: ['Neural Networks with TensorFlow', 'CNNs for Image Recognition', 'Transfer Learning & Fine-Tuning'] },
      { week: 'Week 7-8', title: 'NLP & Transformers', topics: ['Text Processing & Embeddings', 'Attention Mechanisms & Transformers', 'Building Chatbots & Sentiment Analysis'] },
      { week: 'Week 9-10', title: 'Advanced CV & GANs', topics: ['Object Detection (YOLO, SSD)', 'Image Segmentation', 'Generative Adversarial Networks'] },
      { week: 'Week 11-12', title: 'MLOps & Deployment', topics: ['Model Serving with FastAPI', 'Docker & Kubernetes for ML', 'CI/CD for ML Pipelines'] },
    ],
    projectList: ['End-to-end sentiment analysis pipeline', 'Real-time object detection system', 'Recommendation engine for e-commerce', 'Custom LLM fine-tuning project'],
    outcomes: ['ML Engineer at top product companies', 'Data Scientist roles at 8-50 LPA', 'Research positions at AI labs', 'AI startup founding roles'],
  },
  {
    name: 'Data Analytics',
    tagline: 'Turn raw data into business decisions',
    desc: 'Transform data into actionable insights with SQL, Python, Power BI, and Tableau. Become a data-driven decision maker.',
    salary: '6-25 LPA', duration: '12 Weeks', projects: 4,
    color: 'from-blue-500 to-cyan-500',
    techIcons: [
      { icon: SiPostgresql, label: 'SQL' },
      { icon: SiPython, label: 'Python' },
      { icon: SiChartdotjs, label: 'Charts' },
      { icon: SiPandas, label: 'Pandas' },
    ],
    overview: 'Transform raw data into actionable business insights. Master SQL, Python analytics, and visualization tools to become a data-driven decision maker.',
    syllabus: [
      { week: 'Week 1-2', title: 'SQL Mastery', topics: ['Complex Joins & Subqueries', 'Window Functions & CTEs', 'Database Design & Optimization'] },
      { week: 'Week 3-4', title: 'Python for Analytics', topics: ['Pandas Data Manipulation', 'Statistical Analysis with SciPy', 'Data Cleaning & Wrangling'] },
      { week: 'Week 5-6', title: 'Visualization & BI', topics: ['Power BI Dashboards', 'Tableau Storytelling', 'Advanced Chart Design'] },
      { week: 'Week 7-8', title: 'Advanced Analytics', topics: ['A/B Testing & Experimentation', 'Cohort Analysis & Funnels', 'Predictive Analytics Basics'] },
      { week: 'Week 9-10', title: 'Business Intelligence', topics: ['KPI Framework Design', 'Executive Dashboard Building', 'Stakeholder Presentation Skills'] },
      { week: 'Week 11-12', title: 'Capstone & Interview Prep', topics: ['Industry Case Studies', 'Analytics Portfolio Building', 'Mock Interviews & Guesstimates'] },
    ],
    projectList: ['Sales performance dashboard', 'Customer churn prediction model', 'Marketing campaign ROI analysis', 'Supply chain optimization report'],
    outcomes: ['Business Analyst at consulting firms', 'Data Analyst at 6-25 LPA', 'Product Analyst at tech companies', 'Analytics lead roles'],
  },
  {
    name: 'Full Stack MERN',
    tagline: 'Build modern web apps end-to-end',
    desc: 'Master MongoDB, Express, React, and Node.js to build and deploy scalable, production-ready web applications.',
    salary: '6-35 LPA', duration: '12 Weeks', projects: 4,
    color: 'from-green-500 to-emerald-500',
    techIcons: [
      { icon: SiMongodb, label: 'MongoDB' },
      { icon: SiExpress, label: 'Express' },
      { icon: SiReact, label: 'React' },
      { icon: SiNodedotjs, label: 'Node.js' },
    ],
    overview: 'Build modern web applications from front-end to back-end. Master the MERN stack and deploy scalable, production-ready applications.',
    syllabus: [
      { week: 'Week 1-2', title: 'Advanced JavaScript & React', topics: ['ES6+ Features & TypeScript', 'React Hooks & State Management', 'Component Architecture & Testing'] },
      { week: 'Week 3-4', title: 'Backend with Node.js', topics: ['Express.js & REST APIs', 'Authentication & Authorization', 'Error Handling & Middleware'] },
      { week: 'Week 5-6', title: 'Database & Architecture', topics: ['MongoDB & Mongoose ODM', 'Database Design Patterns', 'Caching with Redis'] },
      { week: 'Week 7-8', title: 'Advanced Frontend', topics: ['Next.js & SSR/SSG', 'State Management (Redux/Zustand)', 'Performance Optimization'] },
      { week: 'Week 9-10', title: 'DevOps & Deployment', topics: ['Docker Containerization', 'CI/CD Pipelines', 'AWS/Vercel Deployment'] },
      { week: 'Week 11-12', title: 'Capstone Project', topics: ['Full-stack Application Build', 'System Design & Architecture', 'Code Reviews & Best Practices'] },
    ],
    projectList: ['E-commerce platform with payments', 'Real-time collaboration tool', 'Social media application', 'SaaS dashboard with analytics'],
    outcomes: ['Full Stack Developer at startups', 'SDE roles at 6-35 LPA', 'Frontend/Backend specialist', 'Tech lead positions'],
  },
  {
    name: 'Android/iOS Dev',
    tagline: 'Create apps millions will love',
    desc: 'Build beautiful, performant mobile apps for both platforms using Kotlin, Swift, Flutter, and React Native.',
    salary: '6-30 LPA', duration: '12 Weeks', projects: 4,
    color: 'from-orange-500 to-red-500',
    techIcons: [
      { icon: SiKotlin, label: 'Kotlin' },
      { icon: SiSwift, label: 'Swift' },
      { icon: SiFlutter, label: 'Flutter' },
      { icon: SiFirebase, label: 'Firebase' },
    ],
    overview: 'Create beautiful, performant mobile applications for both Android and iOS platforms using native and cross-platform technologies.',
    syllabus: [
      { week: 'Week 1-2', title: 'Mobile Fundamentals', topics: ['Kotlin/Swift Basics', 'UI Frameworks (Jetpack Compose/SwiftUI)', 'Navigation & Lifecycle'] },
      { week: 'Week 3-4', title: 'Cross-Platform Development', topics: ['Flutter & Dart', 'React Native', 'Platform-Specific Code'] },
      { week: 'Week 5-6', title: 'Backend Integration', topics: ['RESTful API Consumption', 'Firebase & Supabase', 'Push Notifications'] },
      { week: 'Week 7-8', title: 'Advanced Mobile', topics: ['State Management Patterns', 'Offline-First Architecture', 'Performance Optimization'] },
      { week: 'Week 9-10', title: 'App Store & Testing', topics: ['Unit & Integration Testing', 'App Store Optimization', 'CI/CD for Mobile'] },
      { week: 'Week 11-12', title: 'Capstone & Portfolio', topics: ['Production App Development', 'App Store Submission', 'Portfolio Presentation'] },
    ],
    projectList: ['Food delivery app clone', 'Fitness tracking application', 'Chat messaging app', 'AR-based shopping experience'],
    outcomes: ['Mobile Developer at product companies', 'App Developer at 6-30 LPA', 'Cross-platform specialist', 'Mobile tech lead'],
  },
  {
    name: 'DevOps Engineering',
    tagline: 'Automate, deploy, and scale infrastructure',
    desc: 'Master Docker, Kubernetes, AWS, CI/CD, and Terraform to build and maintain scalable cloud infrastructure.',
    salary: '8-40 LPA', duration: '12 Weeks', projects: 4,
    color: 'from-teal-500 to-cyan-600',
    techIcons: [
      { icon: SiDocker, label: 'Docker' },
      { icon: SiKubernetes, label: 'K8s' },
      { icon: FiCloud, label: 'AWS' },
      { icon: SiTerraform, label: 'Terraform' },
    ],
    overview: 'Master the art of building, deploying, and maintaining scalable infrastructure. Learn cloud platforms, containerization, and automation.',
    syllabus: [
      { week: 'Week 1-2', title: 'Linux & Networking', topics: ['Linux Administration', 'Networking Fundamentals', 'Shell Scripting & Automation'] },
      { week: 'Week 3-4', title: 'Containerization', topics: ['Docker Deep Dive', 'Docker Compose & Multi-Stage Builds', 'Container Security'] },
      { week: 'Week 5-6', title: 'Kubernetes', topics: ['K8s Architecture & Pods', 'Services, Deployments, ConfigMaps', 'Helm Charts & Operators'] },
      { week: 'Week 7-8', title: 'Cloud & IaC', topics: ['AWS Core Services (EC2, S3, RDS)', 'Terraform Infrastructure as Code', 'CloudFormation & CDK'] },
      { week: 'Week 9-10', title: 'CI/CD & Monitoring', topics: ['Jenkins & GitHub Actions', 'Prometheus & Grafana', 'ELK Stack & Log Management'] },
      { week: 'Week 11-12', title: 'Advanced & Capstone', topics: ['Service Mesh (Istio)', 'GitOps with ArgoCD', 'Production Infrastructure Project'] },
    ],
    projectList: ['Multi-service K8s deployment', 'Automated CI/CD pipeline', 'Infrastructure monitoring dashboard', 'Zero-downtime deployment system'],
    outcomes: ['DevOps Engineer at cloud companies', 'SRE roles at 8-40 LPA', 'Cloud Architect positions', 'Platform Engineering lead'],
  },
]

export default function TracksSection() {
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)

  return (
    <section id="tracks" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#4A5FE7] mb-3">Career Tracks</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Choose Your Track</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Select the career path that matches your passion. Each track includes specialized curriculum, hands-on projects, and industry mentorship.</p>
        </div>

        <div className="space-y-5">
          {TRACKS.map((track) => (
            <div
              key={track.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Left: Gradient bar + Info */}
                <div className="flex items-start gap-5 flex-1 min-w-0">
                  <div className={`hidden sm:block w-1.5 h-24 rounded-full bg-gradient-to-b ${track.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{track.name}</h3>
                      <Badge className="font-mono text-xs bg-gray-100 text-gray-700 hover:bg-gray-100 hidden sm:inline-flex">{track.salary}</Badge>
                    </div>
                    <p className="text-sm text-[#4A5FE7] font-medium mb-2">{track.tagline}</p>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{track.desc}</p>
                  </div>
                </div>

                {/* Center: Tech stack icons */}
                <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
                  {track.techIcons.map((tech) => {
                    const TechIcon = tech.icon
                    return (
                      <div key={tech.label} className="flex flex-col items-center gap-1.5 group/icon">
                        <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover/icon:border-[#4A5FE7]/30 group-hover/icon:bg-[#4A5FE7]/5 transition-colors">
                          <TechIcon size={20} className="text-gray-600 group-hover/icon:text-[#4A5FE7] transition-colors" />
                        </div>
                        <span className="text-[10px] text-gray-400 font-medium">{tech.label}</span>
                      </div>
                    )
                  })}
                </div>

                {/* Right: Stats + CTA */}
                <div className="flex items-center gap-6 flex-shrink-0">
                  <div className="hidden md:flex items-center gap-5 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <FiClock size={14} className="text-gray-400" />
                      <span>{track.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiBookOpen size={14} className="text-gray-400" />
                      <span>{track.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <FiAward size={14} className="text-gray-400" />
                      <span>Certificate</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTrack(track)}
                    className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-[#4A5FE7] to-[#00BCD4] text-white hover:opacity-90 transition-opacity flex items-center gap-2 flex-shrink-0"
                  >
                    Explore <FiArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Mobile: salary + stats row */}
              <div className="flex items-center gap-4 mt-4 lg:hidden">
                <Badge className="font-mono text-xs bg-gray-100 text-gray-700 hover:bg-gray-100 sm:hidden">{track.salary}</Badge>
                <div className="flex items-center gap-4 text-xs text-gray-500 md:hidden">
                  <span className="flex items-center gap-1"><FiClock size={12} /> {track.duration}</span>
                  <span className="flex items-center gap-1"><FiBookOpen size={12} /> {track.projects} Projects</span>
                  <span className="flex items-center gap-1"><FiAward size={12} /> Certificate</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedTrack} onOpenChange={() => setSelectedTrack(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] bg-white border-gray-200">
          {selectedTrack && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-xl text-gray-900">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${selectedTrack.color} flex items-center justify-center`}>
                    {(() => { const TechIcon = selectedTrack.techIcons[0]?.icon; return TechIcon ? <TechIcon size={16} className="text-white" /> : null })()}
                  </div>
                  {selectedTrack.name}
                  <Badge className="font-mono text-xs ml-auto bg-gray-100 text-gray-700 hover:bg-gray-100">{selectedTrack.salary}</Badge>
                </DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="overview" className="mt-4">
                <TabsList className="w-full grid grid-cols-4 bg-gray-100">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                </TabsList>
                <ScrollArea className="h-[50vh] mt-4 pr-4">
                  <TabsContent value="overview" className="mt-0">
                    <p className="text-gray-600 leading-relaxed">{selectedTrack.overview}</p>
                    <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <p className="text-sm font-medium mb-3 text-gray-900">Tech Stack:</p>
                      <div className="flex flex-wrap gap-3">
                        {selectedTrack.techIcons.map((tech) => {
                          const TechIcon = tech.icon
                          return (
                            <div key={tech.label} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-lg border border-gray-100">
                              <TechIcon size={16} className="text-gray-600" />
                              <span className="text-sm text-gray-700">{tech.label}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="syllabus" className="mt-0 space-y-4">
                    {Array.isArray(selectedTrack?.syllabus) && selectedTrack.syllabus.map((s) => (
                      <div key={s.week} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="outline" className="text-xs font-mono">{s.week}</Badge>
                          <h4 className="font-semibold text-sm text-gray-900">{s.title}</h4>
                        </div>
                        <ul className="space-y-1 ml-4">
                          {Array.isArray(s?.topics) && s.topics.map((t) => (
                            <li key={t} className="text-sm text-gray-500 list-disc">{t}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="projects" className="mt-0 space-y-3">
                    {Array.isArray(selectedTrack?.projectList) && selectedTrack.projectList.map((p) => (
                      <div key={p} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <FiBookOpen className="text-[#4A5FE7] mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-sm text-gray-700">{p}</p>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="outcomes" className="mt-0 space-y-3">
                    {Array.isArray(selectedTrack?.outcomes) && selectedTrack.outcomes.map((o) => (
                      <div key={o} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                        <FiArrowRight className="text-[#4CAF50] mt-0.5 flex-shrink-0" size={16} />
                        <p className="text-sm text-gray-700">{o}</p>
                      </div>
                    ))}
                  </TabsContent>
                </ScrollArea>
              </Tabs>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
