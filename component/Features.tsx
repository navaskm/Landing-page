"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeIn : Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const features = [
  {
    title: "Automated workflows",
    desc: "Trigger campaigns, alerts, and personalized journeys in minutes.",
    accent: "⚡",
  },
  {
    title: "Human-like insights",
    desc: "AI surfaces trends and drafts answers you can trust.",
    accent: "💡",
  },
  {
    title: "Enterprise ready",
    desc: "SOC2 controls, SSO, audit trails, and global availability.",
    accent: "🛡️",
  },
];

const Features = () => (
  <section id="features" className="space-y-10">
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
        Why teams pick us
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        Less friction, more flow.
      </h2>
      <p className="max-w-2xl text-lg text-slate-200">
        Design, ship, and iterate with motion-first blocks. Every section is
        ready to publish, measured automatically, and tuned for conversion.
      </p>
    </div>
    <div className="grid gap-6 md:grid-cols-3">
      {features.map((feature, idx) => (
        <motion.div
          key={feature.title}
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: idx * 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10 backdrop-blur"
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-400/10" />
          </div>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 text-lg">
            {feature.accent}
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">
            {feature.title}
          </h3>
          <p className="mt-2 text-slate-200">{feature.desc}</p>
          <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
            Explore
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Features;