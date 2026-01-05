import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Phone, MapPin } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-white/80 tracking-wide mb-4">
                  ASPIRING DATA SCIENTIST
                </p>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-responsive-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Altaf Khan</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-foreground/70 max-w-2xl leading-relaxed text-responsive-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {data.tagline}
              </motion.p>
            </div>

            {/* Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/60 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Mail className="w-4 h-4" />
                <span>{data.email}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Phone className="w-4 h-4" />
                <span>{data.phone}</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <MapPin className="w-4 h-4" />
                <span>{data.location}</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/cv/Altaf_Khan_CV.pdf"
                download
                className="btn-primary btn-elegant flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>

              <motion.button
                className="btn-secondary btn-elegant flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Profile Image Placeholder */}
          <motion.div
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="profile-image">
              <motion.div
                className="aspect-square glass-card flex items-center justify-center p-2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/altaf.jpg"
                  alt="Altaf Khan"
                  className="w-full h-full object-cover rounded-2xl"
                />



              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/5 rounded-full"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.button
          onClick={scrollToAbout}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white/60 hover:text-white transition-all duration-300"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;