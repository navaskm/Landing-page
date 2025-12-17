const CTA = () => (
  <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-purple-500 to-cyan-400 p-[1px] shadow-2xl shadow-purple-500/20">
    <div className="flex flex-col gap-4 rounded-[22px] bg-slate-950 px-8 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
          Ready to ship
        </p>
        <h3 className="text-3xl font-semibold text-white sm:text-4xl">
          Claim your invite and build with us.
        </h3>
        <p className="text-lg text-white/80">
          Early access seats are limited. Get the toolkit, motion presets, and
          a team that ships with you.
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/30 transition hover:translate-y-[-2px]">
          Get started
        </button>
        <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
          Talk to us
        </button>
      </div>
    </div>
  </section>
);

export default CTA;