"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide3_Tech() {
  // We added /IOT-Presentation to the image paths so they work on GitHub Pages!
  const techs = [
    { 
      id: 1,
      title: "ESP32 Microcontrollers", 
      desc: "Single integrated circuits dedicated to executing standalone firmware applications directly at the desk layer.", 
      cat: "Hardware",
      position: "top-[15%] left-[73%]",
      image: "/IOT-Presentation/esp32.png" 
    },
    { 
      id: 2,
      title: "RFID Kiosk & QR Labels", 
      desc: "Dual check-in hardware. Front entrance handles RFID validation, while desks utilize unique, durable physical QR code labels.", 
      cat: "Hardware",
      position: "bottom-[30%] left-[32%]",
      image: "/IOT-Presentation/kiosk.png" 
    },
    { 
      id: 3,
      title: "Sound Sensors & Smart Sockets", 
      desc: "Analog sound level sensors capture decibel variations, while IoT smart power sockets manage electrical outlets electronically.", 
      cat: "Hardware",
      position: "top-[55%] right-[16%]",
      image: "/IOT-Presentation/sensors.png" 
    },
    { 
      id: 4,
      title: "Wi-Fi & MQTT Protocol", 
      desc: "Edge layers connect using campus Wi-Fi infrastructure, streaming light-weight telemetry with ultra-low latency.", 
      cat: "Network",
      position: "bottom-[60%] right-[78%]",
      image: "/IOT-Presentation/network.png" 
    }
  ];

  const [activeTech, setActiveTech] = useState(techs[1]); // Default to Kiosk

  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-slate-950 to-slate-900 px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mb-8"
      >
        <h2 className="text-4xl font-bold text-white tracking-tight">System Architecture Stack</h2>
        <p className="text-slate-400 mt-2">Click the nodes in the room to inspect the hardware.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl w-full h-[60vh]">
        
        {/* LEFT SIDE: The "Room" Blueprint */}
        <div 
          className="relative flex-1 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
          style={{ 
            // HERE IS WHERE WE ADD THE ROOM BACKGROUND IMAGE
            backgroundImage: "url('/IOT-Presentation/room_blueprint.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        >
          {/* A slight dark overlay to make the buttons pop better against the background */}
          <div className="absolute inset-0 bg-slate-900/20 pointer-events-none" />
          
          {/* Interactive Nodes */}
          {techs.map((tech) => (
            <motion.button
              key={tech.id}
              onClick={() => setActiveTech(tech)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-colors ${
                activeTech.id === tech.id 
                  ? "bg-blue-500 border-blue-300 shadow-blue-500/50 z-10" 
                  : "bg-slate-800 border-slate-500 hover:border-blue-400"
              } ${tech.position}`}
            >
              <span className="text-white font-bold">{tech.id}</span>
            </motion.button>
          ))}
        </div>

        {/* RIGHT SIDE: The Information Card */}
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
            >
              <div className="mb-6 h-48 w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center relative">
                
                {/* HERE IS WHERE YOUR TECH IMAGES (ESP32, KIOSK, ETC.) LOAD */}
                <img 
                  src={activeTech.image} 
                  alt={activeTech.title} 
                  className="object-contain w-full h-full p-6 opacity-90 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                <div className="hidden absolute inset-0 items-center justify-center text-slate-500 text-sm italic">
                  [ Image Placeholder: {activeTech.image} ]
                </div>
              </div>

              <span className="text-xs font-mono px-3 py-1 bg-slate-900 rounded-full text-blue-400 uppercase tracking-wider">
                {activeTech.cat}
              </span>
              <h3 className="text-2xl font-bold text-slate-100 mt-4">{activeTech.title}</h3>
              <p className="text-base text-slate-400 mt-4 leading-relaxed">
                {activeTech.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}