"use client";
import { motion } from "framer-motion";

export default function Slide2_Aim() {
  return (
    <section className="h-screen w-screen flex items-center justify-center bg-slate-950 px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white tracking-tight border-l-4 border-blue-500 pl-4">
            Project Aim & Problem Scope
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            Midterm and final examinations often lead to a severe shortage of seats in university libraries. This baseline challenge is significantly worsened by unfair user practices, such as students leaving personal belongings like backpacks on chairs to hold tables while being away for long durations.
          </p>
          <p className="text-slate-400 leading-relaxed">
            We come up with a flexible dual-method booking architecture integrated with an edge-based noise monitoring sensor network and automated power controls to eliminate ghost bookings completely.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl space-y-4"
        >
          <h3 className="text-xl font-bold text-blue-400">The 5 Stages of the IoT Data Lifecycle</h3>
          <div className="space-y-3">
            {[
              "1. Sensing: Environmental parameters via localized hardware.",
              "2. Transmitting: Efficient messaging across campus infrastructure.",
              "3. Storing: Secure tracking inside cloud relational databases.",
              "4. Processing: Algorithmic decision-making at edge/cloud layers.",
              "5. Executing: Automated actions (Relay controls, warning alerts)."
            ].map((stage, idx) => (
              <div key={idx} className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/50 text-sm text-slate-300">
                {stage}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}