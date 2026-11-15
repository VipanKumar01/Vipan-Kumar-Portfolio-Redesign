import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Home, ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Overline } from "@/components/site/Primitives";
import { useSeo } from "@/lib/useSeo";

const EASE = [0.7, 0, 0.2, 1];

export default function NotFound() {
  useSeo({
    title: "404 · Page not found — Vipan Kumar",
    description: "The page you're looking for could not be found. Head back to Vipan Kumar's portfolio.",
    url: "/",
  });

  return (
    <>
      <Header ready />
      <main className="relative min-h-screen overflow-hidden pt-32 md:pt-40 pb-20 px-4 md:px-10 flex flex-col" data-testid="notfound-page">
        <div className="absolute inset-0 hairline-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="absolute -top-40 right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#54f446]/10 blur-[120px]" />

        <div className="relative flex items-center justify-between gap-6">
          <Overline>Error 404</Overline>
          <Overline className="hidden md:block">Vipan Kumar</Overline>
        </div>

        <h1 className="relative mt-10 font-display font-extrabold uppercase tracking-[-0.06em] leading-[0.82] text-[26vw] md:text-[18vw]" data-testid="notfound-code">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <span className="text-stroke">4</span><span className="text-[#54f446]">0</span><span className="text-stroke">4</span>
          </motion.span>
        </h1>

        <motion.div
          className="relative mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: EASE }}
        >
          <div className="lg:col-span-6">
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-[#f2f1ec]">
              This page took a detour.
            </p>
            <p className="mt-4 text-zinc-300 max-w-md text-sm md:text-base leading-relaxed">
              The link might be broken, or the page may have been moved. Let's get you back to the good stuff.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-[#f2f1ec] text-[#0a0b0f] px-6 py-3.5 font-semibold hover:bg-[#54f446] transition-colors"
              data-testid="notfound-home-btn"
            >
              <Home className="w-4 h-4" /> Go home
            </Link>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 hover:border-[#54f446] hover:text-[#54f446] transition-colors"
              data-testid="notfound-work-btn"
            >
              View my work <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#54f446] text-[#0a0b0f] px-6 py-3.5 font-semibold hover:bg-[#f2f1ec] transition-colors"
              data-testid="notfound-contact-btn"
            >
              <ArrowLeft className="w-4 h-4 rotate-180" /> Get in touch
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
