import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/site/Preloader";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Impact } from "@/components/site/Impact";
import { Works } from "@/components/site/Works";
import { Skills } from "@/components/site/Skills";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { scrollToId } from "@/lib/scroll";
import CaseIntradiem from "@/pages/CaseIntradiem";
import CaseBenepikPlus from "@/pages/CaseBenepikPlus";
import NotFound from "@/pages/NotFound";

const Home = () => {
  const [ready, setReady] = useState(!!window.location.hash);
  const done = useCallback(() => {
    setReady(true);
    if (window.__lenis) {
      window.__lenis.resize();
    }
  }, []);

  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.__lenis?.resize();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [ready]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const t = setTimeout(() => scrollToId(hash), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>{!ready && <Preloader key="pre" onDone={done} />}</AnimatePresence>
      <Header ready={ready} />
      <main>
        <Hero ready={ready} />
        <Marquee />
        <Impact />
        <Works />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const ScrollReset = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToId(hash), 150);
      return () => clearTimeout(t);
    }

    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
      window.__lenis.resize();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  useEffect(() => {
    // Initialize Lenis with smooth momentum scrolling (Locomotive-style inertia)
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      respectReducedMotion: false, // Ensures smooth scrolling is active even if OS reduced-motion is enabled
    });
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="grain relative min-h-screen overflow-x-hidden" data-testid="app-root">
      <BrowserRouter>
        <ScrollReset />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/intradiem" element={<CaseIntradiem />} />
          <Route path="/work/benepik-plus" element={<CaseBenepikPlus />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-left" theme="dark" />
    </div>
  );
}

export default App;
