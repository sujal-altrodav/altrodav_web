'use client'

import { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend, FiLoader } from 'react-icons/fi'
import { callAIAgent } from '@/lib/aiAgent'
import { ScrollArea } from '@/components/ui/scroll-area'

const AGENT_ID = '69e7af1b0476e9f953a53bdd'

interface Message {
  role: 'user' | 'assistant'
  text: string
  suggestedSection?: string
}

const SECTION_MAP: Record<string, string> = {
  'Tracks': '#tracks',
  'Pricing': '#pricing',
  'Placement Event': '#placement',
  'For Colleges': '#colleges',
  'FAQ': '#faq',
  'Enroll Now': '#enroll',
  'Program': '#program',
  'Outcomes': '#outcomes',
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setLoading(true)

    try {
      const result = await callAIAgent(text, AGENT_ID)
      const answer = result?.response?.result?.answer ?? result?.response?.message ?? 'Sorry, I could not process that request.'
      const suggestedSection = result?.response?.result?.suggested_section ?? ''
      setMessages((prev) => [...prev, { role: 'assistant', text: answer, suggestedSection: suggestedSection || undefined }])
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleSectionClick = (section: string) => {
    const href = SECTION_MAP[section]
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      setOpen(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ height: '480px' }}>
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-purple-600/20 to-pink-500/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <p className="font-semibold text-sm">Placemux Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
              <FiX size={18} />
            </button>
          </div>

          <ScrollArea className="flex-1 px-4 py-3">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="text-sm text-muted-foreground">Ask me anything about Placemux programs, tracks, pricing, or placement events.</p>
              </div>
            )}
            <div className="space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${msg.role === 'user' ? 'bg-purple-600 text-white' : 'bg-muted text-foreground'}`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    {msg.suggestedSection && (
                      <button onClick={() => handleSectionClick(msg.suggestedSection!)} className="mt-2 text-xs text-purple-300 hover:text-purple-200 underline transition-colors block">
                        View: {msg.suggestedSection}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-xl px-3 py-2">
                    <FiLoader className="animate-spin text-muted-foreground" size={16} />
                  </div>
                </div>
              )}
            </div>
            <div ref={endRef} />
          </ScrollArea>

          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="Type a message..." className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-purple-500 placeholder:text-muted-foreground" />
              <button onClick={handleSend} disabled={loading || !input.trim()} className="w-9 h-9 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white disabled:opacity-50 transition-opacity hover:opacity-90">
                <FiSend size={14} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-xl shadow-purple-500/25 hover:scale-105 transition-transform">
          <FiMessageCircle size={24} />
        </button>
      )}
    </div>
  )
}
