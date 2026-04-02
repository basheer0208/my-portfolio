import React from 'react';
import { motion } from 'motion/react';
import social from '../../data/social';
import CV from '../../assets/CV/Basheer_Abbas_Resume.pdf';
import './Hero.css';

const skills = ['React', 'Angular', 'Python', 'FastAPI', 'Node.js', 'TypeScript', 'AWS', 'Supabase', 'MySQL', 'Docker'];

const nameWords = ['Basheer', 'Abbas', 'Shaik'];

const SocialIcon = ({ type }) => {
  if (type === 'github')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    );
  if (type === 'linkedin')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  if (type === 'email')
    return (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    );
  return null;
};

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Basheer_Abbas_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="hero-name">
            {nameWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                {word}{' '}
              </motion.span>
            ))}
            <motion.span
              className="accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36 }}
            >
              .
            </motion.span>
          </h1>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Full Stack Developer & Founder
          </motion.p>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                className="hero-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="#projects" className="hero-btn hero-btn-primary">
              View Projects
            </a>
            <button className="hero-btn hero-btn-secondary" onClick={handleDownloadCV}>
              Download CV
            </button>
          </motion.div>

          <motion.div
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="hero-social-link"
                target={s.icon !== 'email' ? '_blank' : undefined}
                rel={s.icon !== 'email' ? 'noopener noreferrer' : undefined}
              >
                <SocialIcon type={s.icon} />
                {s.name}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="hero-aurora">
        <div className="hero-aurora-blob hero-aurora-blob--amber" />
        <div className="hero-aurora-blob hero-aurora-blob--blue" />
        <div className="hero-aurora-blob hero-aurora-blob--purple" />
      </div>
    </section>
  );
};

export default Hero;
