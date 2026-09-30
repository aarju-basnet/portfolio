import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiMongodb, SiExpress, SiSocketdotio, SiLeaflet, SiTailwindcss, SiNodedotjs, SiCss
  , SiJsonwebtokens, SiAxios, SiCodesandbox, SiPostgresql, SiOpenai , SiMaildotru, SiSupabase,
  SiSocket, SiTypescript, SiRedis, SiPrisma
} from "react-icons/si";

export default function Projects() {
console.log(import.meta.env.VITE_RELAY_CODE, import.meta.env.VITE_RELAY_DEMO);
const relayCode = import.meta.env.VITE_RELAY_CODE;
const relayDemo = import.meta.env.VITE_RELAY_DEMO;
const rentEaseCode = import.meta.env.VITE_RENTEASE_CODE;
const rentEaseDemo = import.meta.env.VITE_RENTEASE_DEMO;

const airaCode = import.meta.env.VITE_AIRA_CODE;
const airaDemo = import.meta.env.VITE_AIRA_DEMO;
  const projects = [
    {
      title: "Relay",
      desc: "Relay is a SaaS platform that lets businesses embed a lightweight widget on their website and get real-time analytics, a shared team inbox, and AI-generated summaries in one place. Organizations can invite team members, manage API keys, and track customer activity through a clean developer dashboard. Built with a multi-tenant architecture, secure authentication with 2FA, and Nepal-ready billing through eSewa and Khalti, Relay is designed to be practical for growing businesses.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "Nodejs", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Expressjs", icon: <SiExpress className="text-gray-800" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "Prisma", icon: <SiPrisma className="text-gray-800" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
        { name: "OpenRouter", icon: <SiOpenai className="text-purple-500" /> },
        { name: "Brevo", icon: <SiMaildotru className="text-cyan-500" /> },
      ],
      video: "/relay_web.mp4",
      code: relayCode,
      demo: relayDemo,
    },
    {
      title: "RentEase",
      desc: "RentEase is a modern rental platform designed to simplify the process of renting properties(Rooms,Appartments etc) by connecting owners and customers on a single, seamless platform, check real-time availability, and make bookings with ease. The platform focuses on improving the traditional rental experience by introducing a structured booking flow, transparent availability management, and a smooth user interface. It helps  owners manage their listings while giving customers a fast and reliable way to find and rent properties. Built with scalability and performance in mind, RentEase ensures a smooth experience for both renters and owners through a clean design and optimized backend architecture." , 
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Mongodb", icon: <SiMongodb className="text-green-500" /> },
        { name: "Nodejs", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Expressjs", icon: <SiExpress className="text-black-500" /> },
        { name: "CSS", icon: <SiCss className="text-purple-500" /> },
         { name: "Jsonwebtoken", icon: <SiJsonwebtokens className="text-black-500" /> },
          { name: "Brevo", icon: <SiMaildotru className="text-cyan-500" /> },
         
         { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },

      ],
      video: "/rentease_web.mp4",
      code: rentEaseCode,
      demo: rentEaseDemo,
    },
    
    {
      title: "AIRA",
      desc: "AIRA is an intelligent, AI-powered assistant designed to simplify everyday life through smart conversations, automation, and helpful guidance. Built to understand user needs in a natural way, AIRA helps with productivity, learning, problem-solving, and quick decision-making—all in one place. Whether it’s answering questions, generating ideas, organizing tasks, or assisting in development workflows, AIRA adapts to the user’s context and delivers fast, meaningful support. More than just a tool, AIRA is built to feel like a reliable digital companion that enhances focus, efficiency, and creativity in daily life.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-black" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Nodejs", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "OpenRouter", icon: <SiOpenai className="text-purple-500" /> },
       { name: "Express", icon: <SiExpress className="text-gray-800" /> },
         { name: "Jsonwebtoken", icon: <SiJsonwebtokens className="text-black-500" /> },
         { name: "Brevo", icon: <SiMaildotru className="text-cyan-500" /> },
      ],
      video: "/aira_web.mp4",
      code: airaCode,
      demo: airaDemo,
    },
    
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#f5f5f5] text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center">Projects</h2>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-12 items-center">
              {i % 2 === 0 ? (
                <>
                  <ContentBlock p={p} />
                  <VideoBlock p={p} />
                </>
              ) : (
                <>
                  <VideoBlock p={p} />
                  <ContentBlock p={p} />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function VideoBlock({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center"
    >
     <video
  src={p.video}
  controls
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  className="w-full max-w-[560px] rounded-2xl shadow-xl border border-white/70"
/>
    </motion.div>
  );
}


function ContentBlock({ p }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm text-blue-600 font-semibold mb-2 uppercase">
        Featured Project
      </p>
      <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{p.desc}</p>

      <div className="flex flex-wrap gap-6 mb-6">
        {p.tech.map((t, idx) => (
          <motion.div
            key={t.name}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
            className="flex flex-col items-center gap-1"
          >
            <div className="text-2xl">{t.icon}</div>
            <span className="text-[10px] uppercase font-bold text-gray-500">
              {t.name}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-6 border-t border-black/10 pt-6">
        <a href={p.code} className="flex items-center gap-2 hover:text-blue-600 transition font-medium">
          Code <FaGithub size={18} />
        </a>
        <a href={p.demo} className="flex items-center gap-2 hover:text-blue-600 transition font-medium">
          Live Demo <FaExternalLinkAlt size={16} />
        </a>
      </div>
    </motion.div>
  );
}