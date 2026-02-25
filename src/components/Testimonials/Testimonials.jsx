import React from 'react';
import { motion } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import testimonials from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <SectionWrapper id="testimonials" className="testimonials-section" glowIndex={2}>
      <h2 className="section-title">
        What People <span>Say</span>
      </h2>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="testimonial-quote">{t.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} />
                ) : (
                  t.name.charAt(0)
                )}
              </div>
              <div className="testimonial-info">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
