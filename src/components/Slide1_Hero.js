"use client";
import { motion } from "framer-motion";

export default function Slide1_Hero() {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl space-y-6"
      >
        <span className="text-blue-400 font-semibold uppercase tracking-widest text-sm bg-blue-950/50 px-4 py-2 rounded-full border border-blue-800/40">
          ITEC442: Internet of Things Term Project
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mt-4">
          Smart Library Table Reservation & Environment Management System
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mx-auto pt-2">
          An automated IoT solution to coordinate university library seating challenges during peak academic periods.
        </p>
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto my-8" />
        
        <div className="grid grid-cols-2 gap-8 text-left max-w-md mx-auto bg-slate-900/60 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
          <div>
            <p className="text-xs uppercase text-slate-500 font-bold tracking-wider">Presenter 1</p>
            <p className="text-lg font-semibold text-slate-200">Shams Tanrıverdi</p>
            <p className="text-sm text-blue-400">Student No: 21900607</p>
          </div>
          <div>
            <p className="text-xs uppercase text-slate-500 font-bold tracking-wider">Presenter 2</p>
            <p className="text-lg font-semibold text-slate-200">Furkan Eraslan</p>
            <p className="text-sm text-blue-400">Student No: 22000459</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}