"use client";
import { motion } from "framer-motion";

export default function Slide3_Tech() {
  const techs = [
    { title: "ESP32 Microcontrollers", desc: "Single integrated circuits dedicated to executing standalone firmware applications directly at the desk layer.", cat: "Hardware" },
    { title: "RFID Kiosk & QR Labels", desc: "Dual check-in hardware. Front entrance handles RFID validation, while desks utilize unique, durable physical QR code labels.", cat: "Hardware" },
    { title: "Sound Sensors & Smart Sockets", desc: "Analog sound level sensors capture decibel variations, while IoT smart power sockets manage electrical outlets electronically.", cat: "Hardware" },
    { title: "Wi-Fi & MQTT Protocol", desc: "Edge layers connect using campus Wi-Fi infrastructure, streaming light-weight telemetry with ultra-low latency.", cat: "Network" },
    { title: "PaaS Cloud Infrastructure", desc: "Managed deployments using platforms like Google App Engine or AWS Elastic Beanstalk to entirely remove local server maintenance risks.", cat: "Cloud" },
    { title: "Live UI Room Map", desc: "A modern front-end application displaying floor plans updated in real-time based on transactional states.", cat: "Application" }
  ];

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 to-slate-900 px-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mb-12"
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">System Architecture Stack</h2>
        <p className="text-slate-400 mt-2">A comprehensive hardware-to-software technology overview.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {techs.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-blue-500/50 transition-colors flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono px-2 py-1 bg-slate-800 rounded text-blue-400 uppercase tracking-wider">{t.cat}</span>
              <h3 className="text-lg font-bold text-slate-100 mt-3">{t.title}</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">{t.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}