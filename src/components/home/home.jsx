import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import CV from '../../assets/cv/Basheer_resume.pdf'; 

const Home = () => {
  const navigate = useNavigate();
  const [welcomeText, setWelcomeText] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const welcome = "Welcome to Basheer's Digital Universe";
  const description = "Full Stack Developer | Innovator | Problem Solver";
  const tagline = "Transforming Ideas into Digital Reality";
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/basheer0208', icon: '📂' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/basheer02/', icon: '💼' },
    { name: 'Email', url: 'mailto:basheer0208@gmail.com', icon: '📧' }
  ];

  const skills = [
    'React', 'Angular', 'Node.js', 'Python','Fastapi', 'JavaScript', 'AWS', 'MongoDB'
  ];

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < welcome.length) {
        currentText += welcome[currentIndex];
        setWelcomeText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsLoaded(true);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, []);

  const handleViewProjects = () => {
    navigate('/my-portfolio/my-projects');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Basheer_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-welcome-message">
          <span className="typing-text">{welcomeText}</span>
        </div>
        
        <div className="home-description">
          {description}
        </div>

        <div className="home-tagline">
          {tagline}
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">{link.icon}</span>
              <span className="link-text">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="cta-container">
          <button className="cta-button secondary" onClick={handleViewProjects}>
            View Projects
          </button>
          <button className="cta-button secondary" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span className="scroll-text">Scroll to explore</span>
      </div>

      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </div>
  );
};

export default Home;