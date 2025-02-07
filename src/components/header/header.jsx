import React from 'react';
import Link from '@mui/material/Link';
import './header.css';
import logo from '../../assets/home/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <Link href="/" className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </Link>
        </div>
        
        <nav className="nav-links">
          <Link href="/about" className="nav-item">About Me</Link>
          <Link href="/projects" className="nav-item">My Projects</Link>
          <button className="chatbot-btn">
            <svg 
              className="chatbot-icon" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16 13H13V16C13 16.55 12.55 17 12 17C11.45 17 11 16.55 11 16V13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H11V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z" 
                fill="currentColor"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;