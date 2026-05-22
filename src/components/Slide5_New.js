"use client";
import { motion } from "framer-motion";

export default function Slide5_New() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 px-8">
      <div className="max-w-5xl w-full space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mt-3 tracking-tight">Our Custom Dynamic Features</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mt-2">
            Moving beyond traditional static reservation forms to completely cross-link hardware devices directly to spatial resources.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3"
          >
            <div className="w-10 h-10 bg-blue-900/40 rounded-lg border border-blue-700/40 flex items-center justify-center text-blue-400 font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-100">Anti-Ghost Booking QR-Socket Link</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Traditional setups book tables online without checking if the user is present. Our design connects the desk QR code directly to the entrance RFID kiosk and the smart power socket. If an online reservation isnt physically checked into within 15 minutes, the database auto-triggers a countdown.
            </p>
            <p className="text-xs text-amber-400/90 font-mono bg-amber-950/30 p-2 rounded border border-amber-900/40">
              ⚡ Timeout action: Cloud automatically cuts the desk electricity, deletes the unverified booking, and opens the table layout for other waiting students.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3"
          >
            <div className="w-10 h-10 bg-emerald-900/40 rounded-lg border border-emerald-700/40 flex items-center justify-center text-emerald-400 font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-100">Edge-Driven Noise Regulation</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instead of forcing library workers to manually walk around monitoring sound levels, individual desks use analog sound level sensors to check room decibels instantly. If a group exceeds the maximum audio volume, the local microcontroller bypasses cloud lag to act immediately.
            </p>
            <br />
            <p className="text-xs text-emerald-400/90 font-mono bg-emerald-950/30 p-2 rounded border border-emerald-900/40">
              🚨 Latency reduction: A local desk indicator light instantly flashes a warning to cue silence, preserving edge-level speed without overloading servers with raw audio data.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}