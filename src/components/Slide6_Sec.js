"use client";
import { motion } from "framer-motion";

export default function Slide6_Sec() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-slate-950 px-8">
      <div className="max-w-4xl w-full border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12 rounded-3xl space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Data Privacy & Device Security Methods
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 text-sm">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Network & Identity Protection
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To safeguard channels against identity spoofing and Man-In-The-Middle threats, we utilize a Public Key Infrastructure (PKI) architecture. Edge microcontrollers maintain custom cryptographic private keys verified by a trusted Certificate Authority during registration. All MQTT payloads use transport-layer encryption via TLS.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> User & Data Privacy Assurance
            </h3>
            <p className="text-slate-400 leading-relaxed">
              To eliminate human errors like forgotten local security patches, update deployments are automated directly via our PaaS model. For data privacy, the mobile front-end employs anonymous validation tokens rather than storing sensitive individual student data. Sound sensors evaluate strict decibel variations without capturing speech, keeping configurations fully compliant.
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-slate-800 w-full" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-slate-500 gap-4">
          <p>References: METU NCC, Özyeğin Uni, Koç Uni Library Policies (2025) & ITEC442 Course Literature.</p>
          <span className="text-slate-400 font-medium">Eastern Mediterranean University — School of Computing & Technology</span>
        </div>
      </div>
    </section>
  );
}