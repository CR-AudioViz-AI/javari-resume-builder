'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Wand2, Download, CheckCircle2, Briefcase, GraduationCap, Award, Target, Zap, Eye, ChevronRight, Menu, X } from 'lucide-react';

const TEMPLATES = [
  { name: 'Modern', style: 'Clean, minimal design', color: 'from-blue-500 to-indigo-600' },
  { name: 'Professional', style: 'Traditional corporate', color: 'from-gray-600 to-slate-700' },
  { name: 'Creative', style: 'Bold, eye-catching', color: 'from-purple-500 to-pink-600' },
  { name: 'Executive', style: 'Sophisticated leadership', color: 'from-amber-500 to-orange-600' },
  { name: 'Tech', style: 'Developer-focused', color: 'from-green-500 to-emerald-600' },
  { name: 'Academic', style: 'Research & education', color: 'from-cyan-500 to-teal-600' },
];

const FEATURES = [
  { icon: Target, title: 'ATS Optimized', description: 'Beat applicant tracking systems with keyword optimization and proper formatting.' },
  { icon: Wand2, title: 'AI Content Writing', description: 'Transform your experience into compelling bullet points that highlight achievements.' },
  { icon: Eye, title: 'Recruiter Preview', description: 'See exactly how recruiters will view your resume with our preview mode.' },
  { icon: CheckCircle2, title: 'Format Checker', description: 'Automatic checks for length, consistency, and professional standards.' },
  { icon: Zap, title: 'Instant Updates', description: 'Make changes and see real-time updates. Export when ready.' },
  { icon: Download, title: 'Multiple Formats', description: 'Download as PDF, DOCX, or plain text for any application system.' },
];

const STATS = [
  { value: '50K+', label: 'Resumes Created' },
  { value: '3x', label: 'More Interviews' },
  { value: '< 5 min', label: 'To Create' },
  { value: '2 credits', label: 'Per Resume' },
];

export default function ResumeBuilderPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Resume Builder</span>
                <span className="text-blue-400 text-xs block -mt-1">by Javari AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#templates" className="text-gray-300 hover:text-white">Templates</a>
              <a href="#features" className="text-gray-300 hover:text-white">Features</a>
              <a href="/create" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg">Build Resume</a>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-300">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-300 mb-8">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Resume Creation</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Land Your Dream Job
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">With AI-Crafted Resumes</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Create ATS-optimized, professionally written resumes in minutes. AI transforms your experience into compelling content that gets noticed.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="/create" className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl flex items-center gap-2">
              Build Your Resume <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#templates" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5">View Templates</a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Templates</h2>
            <p className="text-gray-400">Choose a style that matches your industry</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEMPLATES.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:border-blue-500/50 transition cursor-pointer group">
                <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${t.color} mb-3 flex items-center justify-center`}>
                  <FileText className="w-8 h-8 text-white/50" />
                </div>
                <div className="font-medium text-white group-hover:text-blue-400 transition">{t.name}</div>
                <div className="text-xs text-gray-500">{t.style}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Our AI handles the hard parts so you can focus on landing interviews.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Next Opportunity Awaits</h2>
          <p className="text-xl text-gray-400 mb-8">Create a resume that opens doors. Start now - it only takes 5 minutes.</p>
          <a href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl">
            Build My Resume <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-blue-400" />
              <span className="text-white font-semibold">Resume Builder</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} CR AudioViz AI, LLC.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
