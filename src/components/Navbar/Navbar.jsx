import React, { useState } from 'react';
import useScrollSpy from '../../hooks/useScrollSpy';
import useSmoothScroll from '../../hooks/useSmoothScroll';
import ThemeToggle from '../shared/ThemeToggle';
import './Navbar.css';

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'testimonials', 'contact'];

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ isDark, onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sections);
  const scrollTo = useSmoothScroll();

  const handleClick = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-logo" onClick={() => handleClick('hero')}>
            B<span>.</span>
          </div>

          <div className="navbar-links">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeId === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>

          <div className="navbar-right-mobile">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${activeId === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default Navbar;
