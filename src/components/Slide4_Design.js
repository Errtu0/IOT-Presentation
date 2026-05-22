"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import phoneBlueImg from '../../public/phoneblue.png';

export default function Slide4_Design() {
  const steps = [
    { title: "1. Advance Booking", desc: "Students request an online reservation up to 24 hours prior, linking multiple co-reservation student cards to a single table." },
    { title: "2. Walk-in Instant Claim", desc: "If an empty desk has no active reservation, students scan the physical QR code directly to claim it on the spot." },
    { title: "3. 15-Min Check-In Window", desc: "Group members must tap their card at the kiosk or scan the table's QR within 15 minutes to flag the desk status as occupied." },
    { title: "4. Power Activation", desc: "Once check-in validates, a signal activates the smart power socket at that specific desk, enabling electricity for laptop chargers." }
  ];

  return (
    <section className="min-h-screen w-screen flex items-center justify-center bg-slate-900 px-8 py-16">
      <div className="max-w-7xl w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text and Sequential Steps */}
        <div className="md:col-span-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight border-l-4 border-blue-500 pl-4">
            System Workflow Execution
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our system cleanly splits duties: the edge layer handles immediate local tasks to guarantee low latency, while the cloud manages heavy storage and tracking trends.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 bg-slate-950/80 rounded-xl border border-slate-800/80 shadow-lg"
              >
                <h4 className="text-base font-bold text-blue-400 mb-2">{s.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Mockup Wrapper that hides the white canvas layout */}
        <div className="md:col-span-6 flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-[380px] h-[550px] overflow-hidden rounded-3xl shadow-2xl bg-[#090d16]"
          >
            {/* By setting a matching background color on the wrapper and using a negative margin/scale trick, 
              we can safely hide the white border pixels off the edges of the display card window.
            */}
            <div className="absolute inset-0 scale-[1.18] flex items-center justify-center">
              <Image 
                src={phoneBlueImg} 
                alt="Campus Library App Real-time Seat Map Interface"
                fill
                priority
                sizes="(max-w-7xl) 380px, 380px"
                className="object-contain"
                 /* Crops out white perfectly if the container matches the slide background */
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}