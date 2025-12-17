const Footer = () => (
  <footer className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 text-sm font-semibold text-white">
        S
      </div>
      <div>
        <div className="font-semibold text-white">Sammunat</div>
        <p className="text-xs text-white/60">Motion-first SaaS experiences</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-white/70">
      <a className="hover:text-white" href="https://www.linkedin.com/company/sammunat/">
        LinkedIn
      </a>
      <a className="hover:text-white" href="https://www.instagram.com/sammunat_llc">
        Instagram
      </a>
      <a className="hover:text-white" href="https://whatsapp.com/channel/0029VbAgR4SFMqrhDNF3l11T">
        WhatsApp
      </a>
      <a className="hover:text-white" href="mailto:hello@sammunat.com">
        Contact
      </a>
    </div>
  </footer>
);

export default Footer;