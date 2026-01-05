import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skillIcons = {
    'Languages & Frameworks': Code,
    'Technologies': Database,
    'Mobile Development': Smartphone,
    'Web Development': Globe
  };

  return (
    <section id="skills" className="min-h-screen py-10 flex flex-col justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-ios"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Skills & Technologies
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-accent mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.p
              className="text-foreground/70 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Here are the technologies and tools I work with to create amazing mobile and web applications.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {data.categories.map((category, categoryIndex) => {
              const IconComponent = skillIcons[category.name] || Code;

              return (
                <motion.div
                  key={category.name}
                  className="glass-card p-4 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg mb-3">
                    <IconComponent className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4 text-gradient-card">
                    {category.name}
                  </h3>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2 group cursor-default"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                        whileHover={{
                          y: -4,
                          scale: 1.02,
                          transition: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                      >
                        <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg backdrop-blur-sm border border-white/5 transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                          <span className="text-foreground/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className="text-white/90 text-sm font-semibold group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full rounded-full h-2 bg-white/10 overflow-hidden">
                          <motion.div
                            className="bg-accent rounded-full h-2 transition-all duration-300 group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{
                              duration: 1,
                              delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {data.additionalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 text-white/90 glass rounded-full text-sm font-medium transition-all duration-200 cursor-default border-0 hover:bg-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 8px 16px rgba(255, 255, 255, 0.1)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;