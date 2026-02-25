import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GrainOverlay from './components/shared/GrainOverlay';
import ScrollProgress from './components/shared/ScrollProgress';
import BackToTop from './components/shared/BackToTop';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <>
      <Preloader loading={loading} />
      <ScrollProgress />
      <GrainOverlay />
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
