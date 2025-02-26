// src/components/header/header.jsx
import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.css';
import logo from '../../assets/header/black_design_logo.png';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

const Header = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isNavVisible && isMobile) {
            setIsNavVisible(false);
        }
    }, [location.pathname, isMobile]);

    return (
        <header className="header">
            <div className="header-content">
                <Link to="/my-portfolio/" className="logo-link">
                    <img src={logo} className="logo" alt="Portfolio Logo" />
                </Link>

                <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
                    <span className="hamburger"></span>
                </button>

                <nav className={`nav-links ${isNavVisible ? 'nav-active' : ''}`}>
                    <Link 
                        to="/my-portfolio/my-projects"
                        className={location.pathname === '/my-portfolio/my-projects' ? 'active' : ''}
                        onClick={toggleNav}
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/my-portfolio/about-me"
                        className={location.pathname === '/my-portfolio/about-me' ? 'active' : ''}
                        onClick={toggleNav}
                    >
                        About
                    </Link>
                    <a 
                        href="mailto:basheersk0208@gmail.com" 
                        className="contact-btn"
                        onClick={toggleNav}
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;