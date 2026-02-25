import React from 'react';
import { motion } from 'motion/react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const glowColors = ['section-glow-accent', 'section-glow-blue', 'section-glow-purple'];
const glowPositions = [
  { right: '-8%', top: '20%' },
  { left: '-10%', bottom: '10%' },
  { right: '5%', top: '60%' },
];

const SectionWrapper = ({ id, children, className = '', glowIndex = -1 }) => {
  const hasGlow = glowIndex >= 0;
  const glowColor = glowColors[glowIndex % glowColors.length];
  const glowPos = glowPositions[glowIndex % glowPositions.length];

  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      style={{
        paddingTop: 'var(--space-section)',
        paddingBottom: 'var(--space-section)',
        overflow: 'hidden',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      {hasGlow && (
        <div className={`section-glow ${glowColor}`} style={glowPos} />
      )}
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
