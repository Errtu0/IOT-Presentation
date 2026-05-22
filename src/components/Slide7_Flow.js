"use client";
import { motion } from "framer-motion";

export default function Slide7_Flow() {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-950 px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 tracking-tight">System Operational Flow</h2>
        <p className="text-slate-400 text-lg mt-2">
          A high-level view of how our core added features process data through the library environment.
        </p>
      </motion.div>

      <div className="space-y-12 max-w-5xl w-full">
        
        {/* FLOW 1: ANTI-GHOST BOOKING */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-blue-500" />
            Workflow 1: Anti-Ghost Booking & Power Control Link
          </h3>
          
          {/* Horizontal Desktop / Vertical Mobile Pipeline using Arrow Strings */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
            
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/4 min-h-[110px]">
              <p className="font-mono text-xs text-slate-500 uppercase mb-1">Step 1: Trigger</p>
              <p className="text-slate-200 font-semibold">User Books Online or Walk-In Scan</p>
              <p className="text-xs text-slate-400 mt-1">Database flags a table as pending.</p>
            </div>

            <div className="text-blue-500 font-bold self-center rotate-90 md:rotate-0 text-xl">➔</div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/4 min-h-[110px]">
              <p className="font-mono text-xs text-slate-500 uppercase mb-1">Step 2: Verification</p>
              <p className="text-slate-200 font-semibold">Physical Desk QR Code Validation</p>
              <p className="text-xs text-slate-400 mt-1">Student card scans inside a 15-minute window.</p>
            </div>

            <div className="text-blue-500 font-bold self-center rotate-90 md:rotate-0 text-xl">➔</div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/4 min-h-[110px]">
              <p className="font-mono text-xs text-slate-500 uppercase mb-1">Step 3: Actuation</p>
              <p className="text-emerald-400 font-semibold">Smart Socket Relay Power ON</p>
              <p className="text-xs text-slate-400 mt-1">Electricity unlocks only after local check-in passes.</p>
            </div>

            <div className="text-blue-500 font-bold self-center rotate-90 md:rotate-0 text-xl">➔</div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/4 min-h-[110px] border-amber-900/60 bg-amber-950/10">
              <p className="font-mono text-xs text-amber-500 uppercase mb-1">Fallback: Timeout</p>
              <p className="text-amber-400 font-semibold">Auto-Cutoff & Table Wipe</p>
              <p className="text-xs text-slate-400 mt-1">No check-in turns off outlet power and clears the desk map.</p>
            </div>

          </div>
        </motion.div>

        {/* FLOW 2: EDGE NOISE REGULATION */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden"
        >
          <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
            Workflow 2: Localized Edge Noise Control
          </h3>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm">
            
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/3 min-h-[100px]">
              <p className="font-mono text-xs text-slate-500 uppercase mb-1">Continuous Input</p>
              <p className="text-slate-200 font-semibold">Analog Sound Sensors</p>
              <p className="text-xs text-slate-400 mt-1">Captures real-time room decibel values at desk level.</p>
            </div>

            <div className="text-emerald-500 font-bold self-center rotate-90 md:rotate-0 text-xl">➔</div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/3 min-h-[100px]">
              <p className="font-mono text-xs text-slate-500 uppercase mb-1">Local Processing</p>
              <p className="text-slate-200 font-semibold">ESP32 Microcontroller Logic</p>
              <p className="text-xs text-slate-400 mt-1">Bypasses cloud server lag to evaluate thresholds instantly.</p>
            </div>

            <div className="text-emerald-500 font-bold self-center rotate-90 md:rotate-0 text-xl">➔</div>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 w-full md:w-1/3 min-h-[100px] border-red-900/60 bg-red-950/10">
              <p className="font-mono text-xs text-red-400 uppercase mb-1">Instant Execution</p>
              <p className="text-red-400 font-semibold">On-Desk Flash Indicator</p>
              <p className="text-xs text-slate-400 mt-1">Flashes warning indicator directly on the table without saving voice data.</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}