import React, { useState, useEffect } from 'react';
import './home.css';

const Home = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const welcome = "Welcome to Basheer's Digital Universe";
  const description = "Full Stack Developer | Innovator | Problem Solver";
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/basheer0208', icon: '📂' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/basheer02/', icon: '💼' },
    { name: 'Email', url: 'mailto:basheer0208@gmail.com', icon: '📧' }
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
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="home-container">
      <div className="home-welcome-message">
        <span className="typing-text">{welcomeText}</span>
      </div>
      <div className="home-description">
        {description}
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
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-text">Scroll to explore</div>
      </div>
    </div>
  );
};

export default Home;