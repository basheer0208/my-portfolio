import React from 'react';
import { motion, useInView } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import skills from '../../data/skills';
import './Skills.css';

const RADIUS = 42;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SkillRing = ({ level }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const offset = CIRCUMFERENCE - (level / 100) * CIRCUMFERENCE;

  return (
    <div className="skill-ring" ref={ref}>
      <svg viewBox="0 0 100 100">
        <circle className="skill-ring-bg" cx="50" cy="50" r={RADIUS} />
        <motion.circle
          className="skill-ring-progress"
          cx="50"
          cy="50"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: CIRCUMFERENCE }}
          animate={inView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </svg>
      <span className="skill-ring-label">{level}%</span>
    </div>
  );
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="skills-section" glowIndex={1}>
      <h2 className="section-title">
        Top <span>Skills</span>
      </h2>

      <div className="skills-bento">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <SkillRing level={skill.level} />
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
