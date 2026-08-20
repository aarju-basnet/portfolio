import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#f5f5f5] text-black"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* IMAGE */}
          <img
            src="/laptop.avif"
            alt="about"
            className="rounded-2xl shadow-md w-[320px] md:w-[370px] h-[260px] object-cover"
          />

          {/* ROTATING CIRCLE */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="absolute -bottom-12 right-2 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
          >

            {/* TEXT */}
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="
                    M 50,50
                    m -37,0
                    a 37,37 0 1,1 74,0
                    a 37,37 0 1,1 -74,0
                  "
                />
              </defs>

              <text
                fill="black"
                fontSize="7"
                fontWeight="600"
                letterSpacing="2"
              >
                <textPath href="#circlePath" startOffset="0%">
                  Backend Engineer •   Nodejs Developer • 
                </textPath>
              </text>
            </svg>

            {/* CENTER EMOJI */}
            <div className="text-2xl">
              👨‍💻
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-blue-600 font-semibold mb-2">
            ABOUT ME
          </p>

          <h2 className="text-3xl font-bold leading-snug mb-4">
            A dedicated Backend Developer based in Nepal.
          </h2>

          <p className="text-gray-600 leading-relaxed">
  I'm a final-year BSc CSIT student and full-stack developer specializing in
  backend systems with Node.js, Express, and TypeScript, backed by PostgreSQL,
  MongoDB, and Redis. I focus on designing clean, scalable APIs and real-time
  applications that solve real problems — not just ones that work, but ones
  built to last.
  <br /><br />
  Beyond writing code, I care about system design, clean architecture, and
  understanding the "why" behind every technical decision. I'm always looking
  to grow through challenging projects and collaborate with teams who value
  thoughtful engineering over quick fixes.
</p>
        </motion.div>

      </div>
    </section>
  );
}