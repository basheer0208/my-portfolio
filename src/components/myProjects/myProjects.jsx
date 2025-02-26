import React, { useState } from 'react';
import './myProjects.css';
import project1 from '../../assets/projects/kitchen&grill.jpg';
// import project2 from '../../assets/projects/mupath.png';
// import project3 from '../../assets/projects/p3db.png';

const MyProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "The Kitchen Grill & Games",
      category: "Full Stack Development",
      description: "A comprehensive e-commerce and reservation platform for a restaurant and gaming venue. Features include real-time court booking, menu ordering, and event management.",
      longDescription: `I played a key role in building and launching The Kitchen Grill & Games website — a dynamic e-commerce and reservation platform. As the lead full-stack developer, I developed robust end-to-end functionality using React.js for the frontend and Python FastAPI for the backend, hosted on AWS EC2. This platform supports a seamless user experience for online ordering, event reservations, and interactive game room bookings. Through innovative features like a custom reservation system, secure payment integration, and real-time inventory management, I helped enhance user engagement, streamline operations, and drive business growth. 
      Key Features:
      • Built and launched The Kitchen’s e-commerce and reservation platform using React.js, Python FastAPI, and AWS EC2.
      • Implemented a complete shopping cart and secure checkout system with Stripe payment integration, handling 500+ daily transactions.
      • Developed a custom reservation system for booking open play, events, and parties, integrating Planyo and Tripleseat APIs.
      • Created an interactive game room layout and selection interface, enhancing user experience and reducing support queries by 50%.
      
      Technical Highlights:
      • Engineered a scalable backend architecture with Python and SQLite, enabling real-time inventory management and concurrent reservations.
      • Built a dynamic content management system empowering staff to update menus, events, and promotions independently.
      • Integrated a digital waiver system, streamlining customer check-in and reducing paper waste.
      • Ensured seamless cross-device user experience with a responsive design achieving 99% uptime and 45% improvement in mobile engagement.
      • Developed RESTful APIs for menu management and booking systems, enhancing backend efficiency and data consistency.
      • Established a CI/CD pipeline using GitHub Actions, automating testing and deployment for faster feature rollouts.
      • Data Processing & Styling: Used web scraping techniques for league software integration and leveraged CSS for a polished design.
      • Created reusable UI components and a responsive landing page, improving development efficiency by 30%.`,
      technologies: ["React.js", "Python FastAPI", "AWS EC2", "Stripe", "SQLite", "Material-UI"],
      image: project1,
      link: "",
      website: "https://thekitchen.fun/",
      status: "Production",
      metrics: [
        "99% uptime across all devices ensuring a seamless user experience.",
        "40% faster feature rollouts thanks to CI/CD automation with GitHub Actions.",
        "30% faster development cycles through a reusable component library"
      ]
    },
    {
      id: 2,
      title: "MU-Path",
      category: "Full Stack Development",
      description: "An innovative academic pathway visualization system helping students map their course requirements and prerequisites in an interactive, user-friendly interface.",
      longDescription: `As the lead full-stack developer, I single-handedly architected and developed the MU-Path platform — an innovative academic pathways visualization system. Using React for the frontend and a dual backend architecture with Node.js and Python, I built a powerful tool that helps students explore course prerequisites and program requirements through dynamic, interactive graphs. This platform combines efficient data processing, real-time updates, and intuitive design to enhance academic planning and reduce advisor workload.  
      Key Features:
      • Designed and developed an interactive course pathway visualization system using React.js, allowing students to explore academic program structures visually.
      • Built dual backend architecture with Node.js and Python for efficient data processing and complex pathway generation algorithms.
      • Implemented a custom pathway generation system, automatically creating and updating course prerequisite maps for 100+ academic programs.
      • Created RESTful APIs for real-time course data retrieval and pathway updates, ensuring consistent and up-to-date information across the platform.
      
      Technical Highlights:
      • Optimized MySQL database schema for efficient storage and querying of complex course relationships and prerequisite chains.
      • Established CI/CD workflows using GCP Cloud Build, enabling seamless and reliable deployments.
      • Reduced pathway rendering time by 65% through caching strategies and lazy loading techniques.
      • Delivered weekly sprint milestones independently, maintaining clear documentation and incorporating stakeholder feedback.
      • Implemented interactive graph rendering for course pathways, enhancing user engagement and simplifying academic planning.`,
      technologies: ["React", "Node.js", "Python", "MySQL", "GCP", "D3.js", "Machine Learning"],
      // image: project2,
      link: "https://github.com/basheer0208/MU-PATH-FRONTEND",
      website: "https://mu-path.com",
      status: "Development",
      metrics: [
        "Mapped 100+ academic programs",
        "65% faster degree planning process",
        "90% student satisfaction rate"
      ]
    },
    {
      id: 3,
      title: "P3DB – Plant Protein Phosphorylation Database",
      category: "Full Stack Development",
      description: "Plant Protein Phosphorylation Database with advanced research tools. Integrates AI-powered search capabilities with interactive data visualization for biological research.",
      longDescription: `As a full-stack developer for the P3DB project, I contributed to building an advanced bioinformatics platform focused on protein phosphorylation data. I designed interactive tools and data visualization features that empower researchers to explore and analyze complex biological datasets. Leveraging React for the frontend and FastAPI for backend services, I developed key systems for efficient data presentation and advanced querying capabilities, improving the accessibility and usability of phosphorylation data for thousands of records.  
      Key Features:
      • Developed the main navigation system with interactive and dynamic dropdown menus, enhancing platform accessibility and usability.
      • Built the comprehensive Datasets interface, implementing advanced filtering and visualization features to manage thousands of phosphorylation records.
      • Engineered the BLAST search functionality, allowing researchers to perform complex sequence alignment queries with high efficiency.
      • Designed the Kinase-Client Network visualization tool using advanced graph algorithms, providing clear insights into protein interaction networks.
      
      Technical Highlights:
      • Created AI-powered query interface (Ask AI) with natural language processing, enabling intuitive database interactions.
      • Implemented the Ortholog Conservation analysis tool, supporting cross-species comparison of protein phosphorylation patterns.
      • Architected RESTful APIs using FastAPI for efficient data retrieval and processing, ensuring a fast and scalable backend.
      • Enhanced system stability by leading bug detection and resolution efforts, improving platform reliability by 75%.
      • Optimized frontend performance using Angular lazy loading and caching strategies, reducing page load times by 55%.
      • Collaborated closely with research teams, translating complex bioinformatics needs into user-friendly software tools.`,
      technologies: ["Angular", "FastAPI", "Nodejs", "TensorFlow", "Docker", "Ngnix","MySQL"],
      // image: project3,
      link: "https://github.com/basheer0208/P3DB",
      website: "https://www.p3db.org/home",
      status: "Active Research",
      metrics: [
        "75% improvement in platform stability through robust bug resolution",
        "55% reduction in page load times with performance optimizations",
        "Enhanced data accessibility for thousands of phosphorylation records"
      ]
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="projects-container">
      <h1 className="projects-title">
        <span className="title-highlight">My</span> Projects
      </h1>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${activeProject === project.id ? 'active' : ''}`}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
            onClick={() => handleProjectClick(project)}
          >
            <div className="project-content">
              <div className="project-info">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-image-container">
                <div className="project-image-placeholder">
                  <span className="image-coming-soon">Image Coming Soon</span>
                </div>
                {/* <img src={project.image} alt={project.title} className="project-image" /> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2>{selectedProject.title}</h2>
              <div className="modal-tags">
                <span className="modal-category">{selectedProject.category}</span>
                <span className="modal-status">{selectedProject.status}</span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-image">
                <div className="project-image-placeholder">
                  <span className="image-coming-soon">Image Coming Soon</span>
                </div>
                {/* <img src={selectedProject.image} alt={selectedProject.title} /> */}
              </div>
              <div className="modal-description">
                <p>{selectedProject.longDescription}</p>
                <div className="modal-metrics">
                  {selectedProject.metrics.map((metric, index) => (
                    <div key={index} className="metric-item">
                      {metric}
                    </div>
                  ))}
                </div>
                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="modal-links">
                  <a href={selectedProject.link} className="modal-link" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                  <a href={selectedProject.website} className="modal-link" target="_blank" rel="noopener noreferrer">
                    Go to Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProjects;