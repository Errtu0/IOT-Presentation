"use client";
import { motion } from "framer-motion";

export default function Slide8_Conclusion() {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950 px-8 py-16">
      <div className="max-w-4xl w-full border border-slate-800 bg-slate-900/40 backdrop-blur-md p-8 md:p-12 rounded-3xl space-y-10 shadow-2xl text-center md:text-left">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Conclusion
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-base leading-relaxed">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p>
              By combining localized ESP32 edge processing with modular platform cloud instances, the Smart Library Reservation System systematically eliminates resource optimization issues. Ghost bookings are neutralized via automated real-time socket overrides, while layout maps provide clear visibility for students seeking study spaces.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p>
              Furthermore, the introduction of edge-driven noise metrics provides a private, lightweight monitoring model that safeguards student conversation data while protecting campus network pipelines. The result is a secure, scalable, and fully automated solution that ensures fair access across modern academic environments.
            </p>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent w-full my-6" />

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 gap-4"
        >
          <p className="font-mono">ITEC442 • Internet of Things & Cybersecurity</p>
          <p className="text-slate-400 font-semibold">Eastern Mediterranean University</p>
        </motion.div>

      </div>
    </section>
  );
}