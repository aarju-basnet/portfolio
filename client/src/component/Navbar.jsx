import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-black/10 shadow-sm"
            : "bg-white/40 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* BRAND */}
          <h1 className="font-bold text-lg tracking-wide text-black z-50">
            Aarju.dev
          </h1>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-black/80">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* MOBILE ICON */}
          <div
            className="md:hidden text-2xl cursor-pointer text-black z-50"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>

      {/* 🌑 DARK OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* 🍎 APPLE STYLE FLOATING MENU */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 transform ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="mx-4 mt-20 bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-black/10 overflow-hidden">

          <div className="flex flex-col text-center text-black py-6 space-y-5 text-lg font-medium">

            <a href="#home" onClick={() => setOpen(false)} className="hover:text-gray-600 transition">
              Home
            </a>

            <a href="#about" onClick={() => setOpen(false)} className="hover:text-gray-600 transition">
              About
            </a>

            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-gray-600 transition">
              Projects
            </a>

            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-gray-600 transition">
              Contact
            </a>

          </div>
        </div>
      </div>
    </>
  );
}