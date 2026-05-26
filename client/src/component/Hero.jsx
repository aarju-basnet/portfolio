import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 40]);
const linkedin = import.meta.env.VITE_LINKEDIN_URL;
const github = import.meta.env.VITE_GITHUB_URL;

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f5f5f5] text-black px-6 overflow-hidden">

      <div className="max-w-4xl w-full flex flex-col items-center gap-8">

        {/* TEXT + IMAGE */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">

          {/* LEFT TEXT (NO SLIDE ANIMATION) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left max-w-md"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Backend Engineer👋
            </h1>

            <p className="text-gray-600 mt-4 max-w-sm mx-auto md:mx-0">
              Hi, I’m Aarju Basnet. I build scalable backend systems and modern web apps with clean architecture.
            </p>

            {/* SOCIAL */}
           <div className="flex justify-center md:justify-start gap-4 mt-5 text-xl">

  <a
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:scale-110 transition"
  >
    <FaGithub />
  </a>

</div>
          </motion.div>

          {/* RIGHT IMAGE (BIGGER NOW) */}
   <motion.div
  style={{ y }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center"
>
  <div className="relative">

    {/* 🔥 STRONG MAIN GLOW */}
    <div
      className="
        absolute inset-0 rounded-full
        bg-purple-500/60
        blur-3xl
        scale-125
        animate-pulse
      "
    />

    {/* ✨ SECOND LAYER GLOW (BIGGER + SOFTER) */}
    <div
      className="
        absolute inset-0 rounded-full
        bg-indigo-400/40
        blur-[80px]
        scale-[1.4]
        animate-pulse
        opacity-80
      "
    />

    {/* ⚡ OUTER AURA (VERY BIG DIFFUSE LIGHT) */}
    <div
      className="
        absolute inset-0 rounded-full
        bg-purple-300/30
        blur-[120px]
        scale-[1.7]
        opacity-70
      "
    />

    {/* 🧑 PROFILE IMAGE */}
    <div
      className="
        w-60 h-60 md:w-72 md:h-72
        rounded-full overflow-hidden
        border-4 border-white/30
        shadow-2xl
        relative z-10
        transition-transform duration-300
        hover:scale-105
      "
    >
      <img
        src="/aarju1.jpeg"
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</motion.div>

        </div>

        {/* TECH STACK */}
        <div className="w-[80%] md:w-[70%] mx-auto overflow-hidden">
          <p className="text-sm font-semibold text-gray-500 mb-3 text-center">
            Tech Stack
          </p>

          <div className="marquee-wrapper">
            <div className="marquee-track">
              {icons.map((src, i) => (
                <img key={i} src={src} className="w-6 mx-4" />
              ))}
              {icons.map((src, i) => (
                <img key={`dup-${i}`} src={src} className="w-6 mx-4" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

const icons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
];