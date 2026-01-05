import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = ({ data }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <section
            id="about"
            className="min-h-screen py-10 flex flex-col justify-center relative"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-4 text-gradient-ios"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            About Me
                        </motion.h2>

                        <motion.div
                            className="w-20 h-1 bg-accent mx-auto"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <p className="text-foreground/80 text-lg leading-relaxed">
                                {data.description}
                            </p>

                            <p className="text-foreground/70 leading-relaxed">
                                {data.detailedDescription}
                            </p>

                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 pt-6">
                                {data.stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        className={`text-center ${index === data.stats.length - 1 ? 'col-span-2' : ''}`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                    >
                                        <div className="text-2xl font-bold text-accent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-foreground/60 text-sm uppercase tracking-wide">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="relative w-[450px] h-[450px] mx-auto md:mx-0 glass-card rounded-2xl overflow-hidden group cursor-pointer"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            whileHover={{
                                scale: 1.05,
                                rotateY: 5,
                                rotateX: 5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                                transition: { type: "spring", stiffness: 300, damping: 20 }
                            }}
                        >
                            <img
                                src={data.image}
                                alt="About Image"
                                className="w-full h-full object-cover"
                            />

                            {/* Reflection/Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                            Interests & Hobbies
                        </h3>

                        <div className="flex flex-wrap justify-center gap-3">
                            {data.interests.map((interest, index) => (
                                <motion.span
                                    key={interest}
                                    className="px-4 py-2 glass rounded-full text-sm font-medium text-white/90 hover:bg-white/20 transition-all duration-200 cursor-default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {interest}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;