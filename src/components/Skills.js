import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Smartphone, Globe } from 'lucide-react';

const Skills = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const skillIcons = {
    'Languages & Frameworks': Code,
    'Technologies': Database,
    'Mobile Development': Smartphone,
    'Web Development': Globe
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.categories.map((category, categoryIndex) => {
              const IconComponent = skillIcons[category.name] || Code;
              
              return (
                <motion.div
                  key={category.name}
                  className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {category.name}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-foreground/80 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-accent text-sm font-semibold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full rounded-full h-2" style={{backgroundColor: '#E9EDC9'}}>
                          <motion.div
                            className="bg-accent rounded-full h-2"
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
                  className="px-4 py-2 text-foreground/80 rounded-full text-sm font-medium transition-all duration-200 cursor-default border hover:border-accent"
                  style={{
                    backgroundColor: '#FAEDCD', 
                    borderColor: '#A67C52',
                    ':hover': {
                      backgroundColor: 'rgb(var(--accent))',
                      color: 'rgb(var(--accent-foreground))'
                    }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgb(var(--accent))',
                    color: 'rgb(var(--accent-foreground))'
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