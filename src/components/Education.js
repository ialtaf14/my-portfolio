import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Eye, Download } from 'lucide-react';

const Education = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="education" className="min-h-screen py-10 flex flex-col justify-center">
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
              Education
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
              My academic background and continuous learning journey in technology.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            {data.degrees.map((degree, index) => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ x: 10 }}
              >
                {/* Timeline Line */}
                {index < data.degrees.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-accent/20" />
                )}

                <div className="flex gap-6 group">
                  {/* Timeline Icon */}
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 bg-blue-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-transparent shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <GraduationCap className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Education Card */}
                  <motion.div
                    className="flex-1 glass-card p-5 hover:border-white/30 transition-all duration-300 hover:shadow-xl"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {degree.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-accent font-medium mb-2">
                          <BookOpen className="w-4 h-4" />
                          <span>{degree.institution}</span>
                        </div>
                        {degree.gpa && (
                          <div className="flex items-center gap-2 text-foreground/60 text-sm">
                            <Award className="w-4 h-4" />
                            <span>GPA: {degree.gpa}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-2 text-sm text-foreground/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{degree.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{degree.location}</span>
                        </div>
                      </div>
                    </div>

                    {degree.description && (
                      <p className="text-foreground/80 mb-4 leading-relaxed">
                        {degree.description}
                      </p>
                    )}

                    {/* Key Subjects/Activities */}
                    {degree.highlights && degree.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Key Highlights:
                        </h4>
                        <div className="space-y-2">
                          {degree.highlights.map((highlight, highlightIndex) => (
                            <motion.div
                              key={highlightIndex}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                              transition={{ duration: 0.4, delay: 0.6 + index * 0.2 + highlightIndex * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-foreground/80 text-sm leading-relaxed">
                                {highlight}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Relevant Coursework/Skills */}
                    {degree.coursework && degree.coursework.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">
                          Relevant Coursework:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {degree.coursework.map((course, courseIndex) => (
                            <motion.span
                              key={course}
                              className="px-3 py-1 glass text-white/90 rounded-full text-xs font-medium hover:bg-white/20 transition-all duration-200 cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + courseIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          {data.certifications && data.certifications.length > 0 && (
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                Certifications & Courses
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-4 hover:border-white/30 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                          {cert.name}
                        </h4>
                        <p className="text-accent text-xs font-medium mb-1">
                          {cert.issuer}
                        </p>
                        {cert.date && (
                          <p className="text-foreground/60 text-xs">
                            {cert.date}
                          </p>
                        )}

                        {(cert.viewUrl || cert.downloadUrl) && (
                          <div className="flex gap-2 mt-3 pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {cert.viewUrl && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(cert.viewUrl, '_blank');
                                }}
                                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/90 border border-white/10 transition-colors duration-200 backdrop-blur-sm"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                View
                              </button>
                            )}
                            {cert.downloadUrl && (
                              <a
                                href={cert.downloadUrl}
                                download
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/90 border border-white/10 transition-colors duration-200 backdrop-blur-sm"
                              >
                                <Download className="w-3.5 h-3.5" />
                                Download
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;