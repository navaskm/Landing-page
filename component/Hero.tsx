"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeIn : Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const Hero = () => (

  <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

    {/* left side of hero section */}
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.div
        variants={fadeIn}
        className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 shadow-lg shadow-purple-500/10"
      >
        <span className="h-2 w-2 rounded-full bg-green-400" />
        Early access live
      </motion.div>

      <motion.h1
        variants={fadeIn}
        className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
      >
        Launch smarter products with motion-first experiences.
      </motion.h1>

      <motion.p
        variants={fadeIn}
        className="text-pretty text-lg text-slate-200 sm:text-xl"
      >
        Sammunat Studio pairs modern design with real-time analytics so your
        product feels premium from day one. Ship interactions that convert,
        guided by data, crafted with care.
      </motion.p>

      <motion.div
        variants={fadeIn}
        className="flex flex-wrap items-center gap-3"
      >
        <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:translate-y-[-2px]">
          Start free trial
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
        <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
          View live demo
        </button>
      </motion.div>

      <motion.div
        variants={fadeIn}
        className="flex flex-wrap gap-6 text-sm text-slate-300"
      >
        <Stat number="4.9/5" label="Average CSAT" />
        <Stat number="12k" label="Automations shipped" />
        <Stat number="40%" label="Lift in conversions" />
      </motion.div>
    </motion.div>


    {/* right side of hero section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/5 p-6 shadow-2xl shadow-purple-500/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(80,160,255,0.14),transparent_30%)]" />
      <div className="relative flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Live sessions
          </div>
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
            Realtime
          </div>
        </div>

        <div className="grid gap-4">
          {["Journey map", "Retention", "Launch timeline"].map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2 + idx * 0.1, duration: 0.6 },
              }}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              <span>{item}</span>
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white">
                {idx === 0 ? "In progress" : idx === 1 ? "+22%" : "New"}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between text-sm text-white/70">
            <span>Motion lab</span>
            <span>Realtime preview</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-white/90">
            {["Pulse", "Drift", "Float"].map((label) => (
              <div
                key={label}
                className="rounded-xl bg-gradient-to-br from-white/15 to-white/5 px-3 py-2 text-center shadow-inner shadow-black/10"
              >
                {label}
              </div>
            ))}
          </div>
          <div className="mt-4 h-36 overflow-hidden rounded-xl border border-white/10 bg-slate-900/60">
            <div className="relative h-full w-full">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.18),transparent_35%)]" />
              <motion.div
                initial={{ x: -140, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.35 } }}
                className="absolute left-6 top-6 h-14 w-14 rounded-2xl bg-white/15 backdrop-blur"
              />
              <motion.div
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.45 } }}
                className="absolute right-10 bottom-6 h-10 w-28 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-400 blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  </section>
);

export default Hero;


const Stat = ({ number, label }: { number: string; label: string }) => (
  <div className="flex flex-col rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-inner shadow-black/10">
    <span className="text-lg font-semibold text-white">{number}</span>
    <span className="text-sm text-slate-200">{label}</span>
  </div>
);