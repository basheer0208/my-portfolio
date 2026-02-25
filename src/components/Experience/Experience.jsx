import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import experience from '../../data/experience';
import './Experience.css';

const Experience = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <SectionWrapper id="experience" className="experience-section" glowIndex={0}>
      <h2 className="section-title">
        Work <span>Experience</span>
      </h2>

      <div className="timeline" ref={timelineRef}>
        <motion.div className="timeline-line" style={{ height: lineHeight }} />

        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="timeline-card">
              <p className="timeline-period">{item.period}</p>
              <h3 className="timeline-role">{item.title}</h3>
              <p className="timeline-company">{item.company}</p>
              <div className="timeline-highlights">
                {item.highlights.map((h, j) => (
                  <p key={j} className="timeline-highlight">
                    {h}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
