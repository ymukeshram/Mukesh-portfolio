import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import BackgroundParticles from './components/BackgroundParticles';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <BackgroundParticles />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
          </main>

          <footer className="py-12 px-6 border-t border-white/5 flex flex-col items-center gap-6">
            <div className="text-2xl font-display font-bold text-gradient">MUKESH.RAM</div>
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Yenduri Mukesh Ram. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#home" className="text-xs uppercase tracking-widest text-white/30 hover:text-neon-blue transition-colors">Home</a>
              <a href="#about" className="text-xs uppercase tracking-widest text-white/30 hover:text-neon-blue transition-colors">About</a>
              <a href="#projects" className="text-xs uppercase tracking-widest text-white/30 hover:text-neon-blue transition-colors">Projects</a>
              <a href="#contact" className="text-xs uppercase tracking-widest text-white/30 hover:text-neon-blue transition-colors">Contact</a>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
