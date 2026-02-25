import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SectionWrapper from '../shared/SectionWrapper';
import ProjectCard from './ProjectCard';
import projects from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const openModal = (project) => {
    setSelected(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <SectionWrapper id="projects" className="projects-section" glowIndex={2}>
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} onClick={openModal} />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <div className="modal-body">
                <h2 className="modal-title">{selected.title}</h2>
                <div className="modal-tags">
                  <span className="project-category">{selected.category}</span>
                  <span className="project-status">{selected.status}</span>
                </div>

                <p className="modal-description">{selected.longDescription}</p>

                <div className="modal-metrics">
                  <h4>Key Metrics</h4>
                  {selected.metrics.map((m, i) => (
                    <div key={i} className="metric-item">
                      {m}
                    </div>
                  ))}
                </div>

                <div className="modal-techs">
                  <h4>Technologies</h4>
                  <div className="project-card-techs">
                    {selected.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selected.website && (
                    <a
                      href={selected.website}
                      className="modal-link modal-link-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  )}
                  {selected.github && (
                    <a
                      href={selected.github}
                      className="modal-link modal-link-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Projects;
