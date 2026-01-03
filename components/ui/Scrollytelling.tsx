"use client";

import { motion } from "framer-motion";
import { Database, Brain, Zap, MessageSquare, ArrowDown, CheckCircle } from "lucide-react";

// --- STATIC DATA (Zero fetch overhead) ---
const steps = [
  {
    id: "01",
    title: "Data Ingestion",
    desc: "We ingest your financial documents, market feeds, and client history into an encrypted AES-256 data lake.",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    stat: "AES-256 Encrypted"
  },
  {
    id: "02",
    title: "Vector Analysis",
    desc: "Our RAG engine converts raw text into 1,536-dimensional vectors, enabling the AI to 'understand' financial context, not just keywords.",
    icon: Brain,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    stat: "50ms Query Speed"
  },
  {
    id: "03",
    title: "Context Retrieval",
    desc: "When a query runs, we retrieve the exact paragraph from your tax returns or portfolio history needed to answer accurately.",
    icon: Zap,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    stat: "99.2% Accuracy"
  },
  {
    id: "04",
    title: "Intelligent Synthesis",
    desc: "The LLM combines your specific data with live market conditions to generate a fiduciary-grade recommendation.",
    icon: MessageSquare,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    stat: "Fiduciary Standard"
  }
];

export default function ProcessArchitecture() {
  return (
    <section className="relative py-24 bg-[#050b14] overflow-hidden">
      
      {/* Background Tech Mesh (CSS only, light) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Architecture v4.0
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            How The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Engine Works</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We moved beyond basic chatbots. We built a retrieval-augmented generation engine specific for wealth management.
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent border-t border-dashed border-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 group"
            >
              {/* Card */}
              <div className="h-full bg-[#0A101E]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1">
                
                {/* Step Number Badge */}
                <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <span className="text-xs font-mono text-slate-600 font-bold opacity-50">0{i+1}</span>
                </div>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {step.desc}
                </p>

                {/* Tech Spec Footer */}
                <div className="pt-4 border-t border-white/5 flex items-center gap-2">
                  <CheckCircle className={`w-3 h-3 ${step.color}`} />
                  <span className={`text-xs font-mono ${step.color} opacity-80 uppercase tracking-wider`}>
                    {step.stat}
                  </span>
                </div>
              </div>

              {/* Mobile Arrow Connector */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4 text-slate-700">
                  <ArrowDown className="w-6 h-6 animate-bounce opacity-50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
