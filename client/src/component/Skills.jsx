import { motion } from 'framer-motion';

const skills = ["React", "Node.js", "Docker", "AWS", "Render", "TypeScript", "Express", "Postgresql"];

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8">Expertise</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="px-5 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm hover:border-blue-500 transition-colors cursor-default"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}