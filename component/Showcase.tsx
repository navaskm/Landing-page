"use client";

import { motion } from "framer-motion";

const Showcase = () => (
  <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 p-8 shadow-2xl shadow-purple-500/15 lg:grid-cols-2">

    {/* left side of showcase */}
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-100">
        Launch faster
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        Crafted for founders and makers.
      </h2>
      <p className="text-lg text-slate-200">
        Build landing pages, onboarding flows, and dashboards in days, not
        weeks. Each block includes motion presets, accessibility baked in, and
        live analytics. Ship confidently with a modern, premium finish.
      </p>
      <div className="grid gap-3 text-sm text-white/80">
        {[
          "Library of motion-first sections",
          "Realtime collaboration with comments",
          "Versioned design tokens in code",
          "Performance scoring baked into previews",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[11px]">
              ✓
            </span>
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* right side of showcase */}
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40 p-6">
      <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-400/20 blur-2xl" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-3xl" />
      <div className="relative space-y-4">
        <div className="flex items-center justify-between text-sm text-white/80">
          <span>Real-time motion preview</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
            Synced
          </span>
        </div>
        <div className="h-64 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
            className="h-full w-full"
          >
            <div className="relative h-full">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { duration: 0.8 } }}
                className="absolute left-6 top-8 h-14 w-28 rounded-xl bg-white/10 backdrop-blur"
              />
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
                className="absolute left-4 bottom-6 h-10 w-24 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400"
              />
              <motion.div
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                className="absolute right-6 bottom-10 h-24 w-24 rounded-2xl bg-white/5"
              />
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
                className="absolute right-8 top-10 h-10 w-32 rounded-lg bg-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>

  </section>
);

export default Showcase;