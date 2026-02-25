import React from 'react';
import { motion, useScroll } from 'motion/react';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'var(--color-accent)',
        transformOrigin: '0%',
        scaleX: scrollYProgress,
        zIndex: 10000,
      }}
    />
  );
};

export default ScrollProgress;
