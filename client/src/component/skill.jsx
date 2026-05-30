import { motion } from "framer-motion";

const skillsData = [
  { name: "Node.js & Express", percentage: 90, level: "Expert" },
  { name: "MongoDB", percentage: 85, level: "Advanced" },
  { name: "React.js", percentage: 40, level: "Basic" },
  { name: "JavaScript (ES6+)", percentage: 80, level: "Expert" },
  { name: "Docker", percentage: 60, level: "Intermediate" },
];

export function SkillsProficiency() {
  // Container animation for a subtle staggered fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.215, 0.610, 0.355, 1] } // Classic smooth ease-out
    }
  };

  return (
    <section className="py-14 bg-[#f5f5f5] text-black px-6 flex justify-center border-t border-black/[0.03]">
      <div className="max-w-2xl w-full flex flex-col gap-6">
        
        {/* Subtle Header */}
        <div className="flex items-center gap-3">
          <span className="h-[1px] w-6 bg-black/20"></span>
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase">
            Capabilities & Proficiency
          </p>
        </div>

        {/* Compact Minimal Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -2, backgroundColor: "rgba(0,0,0,0.02)" }}
              className="p-3.5 bg-white/[0.4] border border-black/[0.06] rounded-xl flex items-center justify-between transition-colors duration-200"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-medium text-gray-900">
                  {skill.name}
                </span>
                <span className="text-[11px] text-gray-400 font-medium tracking-wide">
                  {skill.level}
                </span>
              </div>

              {/* Minimal Circular / Micro Indicator */}
              <div className="flex items-center gap-2">
               <div className="w-12 h-1 bg-black/[0.06] rounded-full overflow-hidden hidden sm:block">
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: `${skill.percentage}%` }}
    transition={{
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: index * 0.1,
    }}
    viewport={{ once: true }}
    className="h-full bg-black/70 rounded-full"
  />
</div>
                <span className="text-xs font-semibold font-mono text-gray-600 bg-black/[0.04] px-1.5 py-0.5 rounded">
                  {skill.percentage}%
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}