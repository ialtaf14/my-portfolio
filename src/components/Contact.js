import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Facebook, X, Youtube, Twitter, Send } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'altafkhan122105@gmail.com',
            href: 'https://mail.google.com/mail/?view=cm&fs=1&to=altafkhan122105@gmail.com',
            color: 'hover:text-red-500'
        },
        {
            icon: Phone,
            label: 'Phone',
            name: 'Altaf Khan',
            value: '+91 8053821088',
            href: 'tel:+918053821088',
            color: 'hover:text-green-500'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Gurugram, India',
            href: 'https://www.google.com/maps/search/?api=1&query=Gurugram,India',
            color: 'hover:text-blue-500'
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
            icon: Instagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/ialtaf14/',
            color: 'hover:text-red-500'
        },
        {
            icon: Facebook,
            label: 'Facebook',
            href: 'https://www.facebook.com/ialtaf.14',
            color: 'hover:text-blue-600'
        },
        {
            icon: Twitter,
            label: 'X (Twitter)',
            href: 'https://x.com/ialtaf14',
            color: 'hover:text-black'
        },
        {
            icon: Send,
            label: 'Telegram',
            href: 'https://t.me/ialtaf14',
            color: 'hover:text-sky-400'
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
                            Open to Data Science & AI/ML opportunities, project collaborations, and tech discussions. Feel free to reach out!
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
                                            <motion.a
                                                key={item.label}
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group flex items-center gap-4 cursor-pointer transition-colors duration-300 ${item.color}`}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                                whileHover={{ x: 5 }}                                          
                                                                            
                                            >
                                                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-current">
                                                    <IconComponent className="w-5 h-5 text-accent group-hover:text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-foreground/60 mb-1">
                                                        {item.label}
                                                    </p>
                                                    <p className="font-medium transition-colors duration-300">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </motion.a>
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
                                 <h4 className="text-sm uppercase tracking-widest text-foreground/60 mb-4">
                                    Follow Me
                                </h4>
                                <div className="flex flex-wrap gap-4">
                                    {socialLinks.map((social, index) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`group flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background transition-all duration-300 hover:border-accent hover:shadow-lg ${social.color}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                                                whileHover={{ y: -3 }}
                                            >
                                                 <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-current">
                                                    <IconComponent className="w-5 h-5 text-accent group-hover:text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                                                    {social.label}
                                                </span>
                                            </motion.a>
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