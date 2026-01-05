import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Header from './Header';
import { mockData } from '../data/mockData';

// Lazy load components
const Hero = lazy(() => import('./Hero'));
const About = lazy(() => import('./About'));
const Skills = lazy(() => import('./Skills'));
const Projects = lazy(() => import('./Projects'));
const Education = lazy(() => import('./Education'));
const Contact = lazy(() => import('./Contact'));

// Loading Fallback
const SectionLoader = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    <div className="min-h-screen text-foreground transition-colors duration-300">
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
          <Suspense fallback={<SectionLoader />}>
            <Hero data={mockData.personal} />
            <About data={mockData.about} />
            <Skills data={mockData.skills} />
            <Projects data={mockData.projects} />
            <Education data={mockData.education} />
            <Contact />
          </Suspense>
        </motion.div>
      </main>
    </div>
  );
};

export default Portfolio;