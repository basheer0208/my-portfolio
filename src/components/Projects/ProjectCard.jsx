import React from 'react';
import { motion } from 'motion/react';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={() => onClick(project)}
    >
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <span className="placeholder">Image Coming Soon</span>
        )}
      </div>
      <div className="project-card-body">
        <div className="project-card-header">
          <span className="project-category">{project.category}</span>
          <span className="project-status">{project.status}</span>
        </div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>
        <div className="project-card-techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
