const Header = () => {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur sm:px-6">

      {/* left side of header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-cyan-400 text-lg font-semibold text-white shadow-lg shadow-purple-500/30">
          S
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-300">
            Sammunat
          </p>
          <p className="text-base font-semibold text-white">SaaS Studio</p>
        </div>
      </div>

      {/* center of header */}
      <div className="hidden items-center gap-8 text-sm text-slate-200 sm:flex">
        <a className="hover:text-white transition-colors" href="#features">
          Features
        </a>
        <a className="hover:text-white transition-colors" href="#pricing">
          Pricing
        </a>
        <a className="hover:text-white transition-colors" href="#testimonials">
          Stories
        </a>
      </div>

      {/* right side of header */}
      <div className="hidden items-center gap-2 sm:flex">
        <button className="rounded-full border border-white/15 px-4 py-2 text-sm text-white transition hover:border-white/40 hover:bg-white/10">
          Sign in
        </button>
        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.45)]">
          Get early access
        </button>
      </div>

      <button className="rounded-full border border-white/15 px-3 py-2 text-sm text-white sm:hidden">
        Menu
      </button>
    </div>
  );
};

export default Header;