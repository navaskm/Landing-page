import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Features from "@/component/Features";
import Showcase from "@/component/Showcase";
import Pricing from "@/component/Pricing";
import Testimonials from "@/component/Testimonials";
import CTA from "@/component/CTA";
import Footer from "@/component/Footer";

export default function Home() {
  
  return (
    <div className="relative min-h-screen bg-surface text-slate-100">

      {/* small background color */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#ffffff0d,_transparent_45%)]" />
      </div>

      {/* components */}
      <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-10 sm:px-8 lg:px-12">
        <Header />
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <Testimonials />
        <CTA />
        <Footer />
      </main>

    </div>
  );
};