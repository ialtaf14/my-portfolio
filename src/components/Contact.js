import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'altafkhan122105@gmail.com',
            href: 'mailto:altafkhan122105@gmail.com'
        },
        {
            icon: Phone,
            label: 'Phone',
            name: 'Altaf Khan',
            value: '+91 8053821088',
            href: 'tel:+918053821088'   
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Gurugram, India',
            href: '#'
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ialtaf14/',
            color: 'hover:text-blue-600'
        },
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/ialtaf14',
            color: 'hover:text-gray-900 dark:hover:text-gray-100'
        },
        {
            icon: ExternalLink,
            label: 'Portfolio',
            href: '#home',
            color: 'hover:text-accent'
        }
    ];

    return (
        <section id="contact" className="py-20">
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
                            Get In Touch
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
                            I'm always open to discussing new opportunities, creative projects, or just having a chat about Flutter development.
                        </motion.p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-6">
                                    Contact Information
                                </h3>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <motion.div
                                                key={item.label}
                                                className="flex items-center gap-4 group cursor-pointer"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                                whileHover={{ x: 5 }}
                                                onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                                            >
                                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-200">
                                                    <IconComponent className="w-5 h-5 text-accent group-hover:text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-foreground/60 mb-1">
                                                        {item.label}
                                                    </p>
                                                    <p className="text-foreground font-medium group-hover:text-accent transition-colors duration-200">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <h4 className="text-lg font-semibold text-foreground mb-4">
                                    Follow Me
                                </h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.button
                                                key={social.label}
                                                className={`w-12 h-12 bg-background border border-border rounded-lg flex items-center justify-center text-foreground/60 hover:border-accent transition-all duration-200 ${social.color}`}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    if (social.href.startsWith('#')) {
                                                        document.querySelector(social.href).scrollIntoView({ behavior: 'smooth' });
                                                    } else {
                                                        window.open(social.href, '_blank');
                                                    }
                                                }}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                            >
                                                <IconComponent className="w-5 h-5" />
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;