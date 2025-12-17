"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const tiers = [
  {
    name: "Starter",
    price: "$29",
    note: "For early-stage teams",
    perks: ["2 workspaces", "1K contacts", "Email + chat", "Motion templates"],
  },
  {
    name: "Pro",
    price: "$79",
    note: "For growing products",
    perks: ["Unlimited workspaces", "Advanced automations", "A/B experiments", "Priority support"],
  },
  {
    name: "Scale",
    price: "Custom",
    note: "For enterprises",
    perks: ["SSO & audit logs", "Dedicated CSM", "Custom SLAs", "Onboarding crew"],
  },
];

const fadeIn : Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Pricing = () => (
  <section id="pricing" className="space-y-8">

    {/* headings */}
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
        Pricing
      </p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">
        Start fast, scale confidently.
      </h2>
      <p className="max-w-2xl text-lg text-slate-200">
        Flexible plans that grow with your product. Cancel anytime. All plans
        include motion templates, analytics, and collaborative workspaces.
      </p>
    </div>

    {/* prices */}
    <div className="grid gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <motion.div
          key={tier.name}
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-500/10"
        >
          {tier.name === "Pro" && (
            <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Popular
            </div>
          )}
          <div>
            <p className="text-sm text-white/80">{tier.note}</p>
            <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
            <p className="mt-1 text-3xl font-bold text-white">{tier.price}</p>
          </div>
          <div className="space-y-3 text-sm text-white/80">
            {tier.perks.map((perk) => (
              <div key={perk} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
                {perk}
              </div>
            ))}
          </div>
          <button className="mt-auto rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10">
            Choose plan
          </button>
        </motion.div>
      ))}
    </div>

  </section>
);

export default Pricing;