"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "We shipped our launch 3x faster. The motion and polish impressed everyone.",
    name: "Anika Sharma",
    role: "Product Lead, Northwind",
  },
  {
    quote: "The dashboard feels alive—smooth, intentional, and conversion-first.",
    name: "Jordan Lee",
    role: "Growth, Sidekick AI",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="space-y-8">
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-100">
        Loved by teams
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        People notice the polish.
      </h2>
      <p className="max-w-2xl text-lg text-slate-200">
        Motion done right earns trust. Founders, marketers, and PMs rely on our
        system to launch with confidence—and measure every interaction.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {testimonials.map((item, idx) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
          viewport={{ once: true, amount: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10"
        >
          <p className="text-lg text-white/90">“{item.quote}”</p>
          <div className="mt-4 text-sm font-semibold text-white">
            {item.name}
          </div>
          <div className="text-sm text-white/70">{item.role}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Testimonials;