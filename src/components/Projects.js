import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Eye } from 'lucide-react';

const Projects = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="projects" className="min-h-screen py-10 flex flex-col justify-center">
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
              Featured Projects
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
              These are the tools and technologies I work with for data analysis, machine learning, and Python-based projects.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {data.projects.map((project, index) => (
              <motion.div
                key={index}
                className="group glass-card overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {/* Project Image Placeholder */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/images/fallback.jpg';
                    }}
                  />

                  {/* Overlay with action buttons */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.button
                        className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    )}

                    {project.githubUrl && (
                      <motion.button
                        className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    )}
                  </div>


                  {/* Overlay with action buttons */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.liveUrl && (
                      <motion.button
                        className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                    )}
                    {project.githubUrl && (
                      <motion.button
                        className="p-3 bg-white rounded-full text-black hover:bg-accent hover:text-white transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-5 h-5" />
                      </motion.button>
                    )}

                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold transition-colors duration-200 text-gradient-card">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.githubUrl && (
                        <motion.button
                          className="p-2 text-foreground/60 hover:text-accent transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                      )}
                      {project.liveUrl && (
                        <motion.button
                          className="p-2 text-foreground/60 hover:text-accent transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      )}
                    </div>
                  </div>

                  <p className="text-blue-100/80 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <div className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm text-foreground/70"
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 + featureIndex * 0.05 }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 glass text-white/90 rounded text-xs font-medium hover:bg-white/20 transition-all duration-200 cursor-default"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More Projects Button */}
          <motion.div
            className="text-center mt-12 relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: isInView ? 0 : 20 }}
            transition={{
              type: "spring",
              stiffness: 80,     // smoothness control
              damping: 18,       // bounce control
              delay: 0.6
            }}
          >
            <motion.button
              className="px-8 py-3 glass rounded-full font-medium text-white/90 transition-all duration-300 hover:bg-white/20"
              animate={{
                boxShadow: ["0 0 0 rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.1)", "0 0 0 rgba(255,255,255,0)"]
              }}
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 8px 16px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                default: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
              onClick={() => window.open("https://github.com/ialtaf14", "_blank")}
            >
              View More Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;