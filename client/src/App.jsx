import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { SkillsProficiency } from './component/skill'
import Footer from "./component/Footer";


export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, 
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup (important)
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Navbar />
      <Hero />
      <SkillsProficiency />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}