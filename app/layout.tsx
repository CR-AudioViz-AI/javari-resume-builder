// app/layout.tsx — Javari Resume
// Fortune 50 quality — uses AppShell for full ecosystem integration
// May 17, 2026 — CR AudioViz AI, LLC
import type { Metadata } from 'next'
import './globals.css'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Javari Resume | Javari by CR AudioViz AI',
  description: 'AI resume builder',
  keywords: 'Javari Resume, Javari, AI, CR AudioViz AI',
}

import AppShell from '@/components/AppShell'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          appName="Javari Resume"
          appColor="#6366f1"
          appEmoji="📄"
          appDesc="AI resume builder"
      handoffApp="Javari Cover Letter"
      handoffUrl="https://javari-cover-letter.vercel.app"
      handoffPitch="Resume ready? Write a matching cover letter →"
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
