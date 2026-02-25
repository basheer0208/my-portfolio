import React, { useState } from 'react';
import { motion } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import './Contact.css';

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailto = `mailto:basheersk0208@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailto, '_blank');
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SectionWrapper id="contact" className="contact-section" glowIndex={1}>
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <p className="contact-subtitle">
        Have a project in mind or just want to say hello? Drop me a message and
        I'll get back to you as soon as possible.
      </p>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..." required />
        </div>
        <button type="submit" className="form-submit">
          Send Message
        </button>
        {sent && <p className="form-success">Message opened in your email client!</p>}
      </motion.form>
    </SectionWrapper>
  );
};

export default Contact;
