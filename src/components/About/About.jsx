import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import AnimatedCounter from '../shared/AnimatedCounter';
import useVisitorCount from '../../hooks/useVisitorCount';
import profileImage from '../../assets/about/profilePicture.jpg';
import './About.css';

const About = () => {
  const visitorCount = useVisitorCount();

  return (
    <SectionWrapper id="about" className="about-section" glowIndex={0}>
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="bento-grid">
        {/* Profile card */}
        <motion.div
          className="bento-card bento-profile"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img src={profileImage} alt="Basheer" className="profile-img" />
          <p className="profile-name">Basheer Abbas Shaik</p>
          <p className="profile-role">Full Stack Developer & Founder</p>
        </motion.div>

        {/* Bio card */}
        <motion.div
          className="bento-card bento-bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3>Who I Am</h3>
          <p>
            Full Stack Developer and Founder with 6+ years of experience building production web
            applications and launching my own ventures. Co-founded The Code House — a web dev agency
            and ed-tech platform — and building CarbonReady, a B2B SaaS for EU carbon compliance.
          </p>
          <p style={{ marginTop: 'var(--space-md)' }}>
            Professionally shipped 5 production platforms across hospitality, property management,
            corporate, and research domains. Core stack: React, Python (FastAPI), TypeScript, AWS,
            and Supabase. I build things end-to-end — from idea to deployment.
          </p>
        </motion.div>

        {/* Education card */}
        <motion.div
          className="bento-card bento-education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Education</h3>
          <p className="edu-degree">M.S. in Computer Science</p>
          <p className="edu-school">University of Missouri Columbia</p>
          <p className="edu-school">Jan 2023 - Dec 2024</p>
          <span className="edu-gpa">GPA: 3.85 / 4.0</span>
        </motion.div>

        {/* Stats card */}
        <motion.div
          className="bento-card bento-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={6} suffix="+" /></div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={2} /></div>
            <div className="stat-label">Companies Founded</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={5} /></div>
            <div className="stat-label">Production Platforms</div>
          </div>
          <div className="stat-item">
            <div className="stat-number"><AnimatedCounter target={33} suffix="+" /></div>
            <div className="stat-label">API Integrations</div>
          </div>
          {visitorCount !== null && (
            <div className="stat-item">
              <div className="stat-number"><AnimatedCounter target={visitorCount} /></div>
              <div className="stat-label">Profile Views</div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
