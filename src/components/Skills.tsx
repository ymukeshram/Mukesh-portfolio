import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Globe, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code2 className="text-neon-blue" />,
    skills: ['Python', 'Java', 'C', 'JavaScript'],
    color: 'from-neon-blue/20 to-transparent'
  },
  {
    title: 'AI / ML',
    icon: <BrainCircuit className="text-white/80" />,
    skills: ['NLP', 'Data Analysis', 'Automation', 'n8n'],
    color: 'from-white/10 to-transparent'
  },
  {
    title: 'Web Development',
    icon: <Globe className="text-emerald-400" />,
    skills: ['React', 'Tailwind CSS', 'HTML/CSS', 'MySQL'],
    color: 'from-emerald-400/20 to-transparent'
  },
  {
    title: 'Tools',
    icon: <Wrench className="text-orange-400" />,
    skills: ['VS Code', 'Git', 'Replit', 'Google Colab'],
    color: 'from-orange-400/20 to-transparent'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            My <span className="text-gradient">Skills</span>
          </motion.h2>
          <div className="w-20 h-1 bg-neon-blue rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`glass p-8 rounded-2xl border-t-2 border-l-2 border-white/10 relative group overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 glass inline-block rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/60 group-hover:text-white group-hover:bg-white/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
