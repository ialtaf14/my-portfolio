import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import { mockData } from '../data/mockData';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300 pb-32">
      <Header />
      <main>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Hero data={mockData.personal} />
          <About data={mockData.about} />
          <Skills data={mockData.skills} />
          <Projects data={mockData.projects} />
          <Education data={mockData.education} />
          <Contact />
        </motion.div>
      </main>
    </div>
  );
};

export default Portfolio;