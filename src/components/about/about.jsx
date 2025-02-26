import React from 'react';
import './about.css';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import profileImage from '../../assets/about/profilePicture.jpg'; // Make sure to add your profile image

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const skills = [
        { name: 'React.js', level: 95 },
        { name: 'Angular', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'MYSQL', level: 70 }
    ];

    return (
        <div className="about-container">
            <motion.div 
                className="about-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div 
                    className="about-header"
                    {...fadeIn}
                >
                    <h1>About Me</h1>
                    <div className="underline"></div>
                </motion.div>

                <div className="about-grid">
                    <motion.div 
                        className="about-text"
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>Who I Am</h2>
                        <div className="experience-highlight">
                            <span className="experience-years">4</span>
                            <span className="experience-text">Years of Professional Experience</span>
                        </div>
                        <p>
                            Hello! I'm a passionate Full Stack Developer with over 4 years of hands-on experience in creating 
                            beautiful and functional web applications. With a strong foundation in both 
                            front-end and back-end development, I strive to build seamless user experiences 
                            that make a difference.
                        </p>
                        <p>
                            My journey in web development started with curiosity and has evolved into a 
                            professional career where I continuously learn and adapt to new technologies 
                            and best practices.
                        </p>
                        
                        <div className="experience-section">
                            <h2>Experience</h2>
                            <div className="experience-item">
                                <h3>Full Stack Developer</h3>
                                <p>Real Equity Management • Jan 2025 - Present</p>
                                <ul>
                                    <li>Spearheaded development of The Kitchen as lead developer using React.js, Python FastAPI, and AWS EC2</li>
                                    <li>Implemented complete e-commerce flow with Stripe payment integration</li>
                                    <li>Built custom reservation system integrating Planyo and Tripleseat APIs</li>
                                    <li>Developed interactive game room layout reducing support queries by 50%</li>
                                    <li>Created dynamic content management system for staff updates</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <h3>Full Stack Developer Intern</h3>
                                <p>Real Equity Management • July 2024 - Dec 2024</p>
                                <ul>
                                    <li>Developed "The Kitchen Grill & Games" website using React.js and Python FastAPI</li>
                                    <li>Implemented shopping cart and reservation system handling 500+ daily transactions</li>
                                    <li>Created CI/CD pipeline using GitHub Actions</li>
                                    <li>Built reusable component library reducing development time by 30%</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <h3>Full Stack Developer – Graduate Assistant</h3>
                                <p>University of Missouri • Jan 2023 - Dec 2024</p>
                                <ul>
                                    <li>Led development of MU-Path academic visualization platform</li>
                                    <li>Built interactive graph visualization interface using React</li>
                                    <li>Developed P3DB platform with advanced research tools and AI-powered queries</li>
                                    <li>Optimized frontend performance reducing load times by 55%</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <h3>Software Developer</h3>
                                <p>Accolite Digital • July 2021 - Dec 2022</p>
                                <ul>
                                    <li>Led e-commerce platform development using Angular and Spring MVC</li>
                                    <li>Implemented RESTful APIs handling 50,000+ daily transactions</li>
                                    <li>Developed reusable components with 85% test coverage</li>
                                    <li>Enhanced application performance reducing load time by 50%</li>
                                </ul>
                            </div>

                            <div className="experience-item">
                                <h3>Software Developer Intern</h3>
                                <p>Accolite Digital • June 2020 - June 2021</p>
                                <ul>
                                    <li>Engineered responsive web applications improving workflow efficiency by 40%</li>
                                    <li>Developed reusable UI components reducing development time by 30%</li>
                                    <li>Achieved 90% code coverage in unit testing</li>
                                    <li>Handled real-time data processing for 10,000+ daily transactions</li>
                                </ul>
                            </div>
                        </div>

                        <div className="education-section">
                            <h2>Education</h2>
                            <div className="education-item">
                                <div className="education-header">
                                    <h3>Master of Science in Computer Science</h3>
                                    <span className="gpa">GPA: 3.85/4.0</span>
                                </div>
                                <p>University of Missouri Columbia • Jan 2023 - Dec 2024</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="profile-section"
                        {...fadeIn}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="profile-image-container">
                            <img src={profileImage} alt="Profile" className="profile-image" />
                        </div>
                        
                        <div className="skills-section">
                            <h2>Top Skills</h2>
                            <div className="skills-grid">
                                {skills.map((skill, index) => (
                                    <motion.div 
                                        key={skill.name}
                                        className="skill-item"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                    >
                                        <div className="skill-info">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div 
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="hobbies-section">
                            <h2>Hobbies & Interests</h2>
                            <div className="hobbies-grid">
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="hobby-icon">🏏</span>
                                    <span className="hobby-name">Cricket</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <span className="hobby-icon">🏸</span>
                                    <span className="hobby-name">Badminton</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <span className="hobby-icon">🏐</span>
                                    <span className="hobby-name">Volleyball</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="hobby-icon">🏃</span>
                                    <span className="hobby-name">Running</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <span className="hobby-icon">📚</span>
                                    <span className="hobby-name">Reading</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <span className="hobby-icon">🎮</span>
                                    <span className="hobby-name">Gaming</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    <span className="hobby-icon">✈️</span>
                                    <span className="hobby-name">Traveling</span>
                                </motion.div>
                                <motion.div 
                                    className="hobby-item"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                >
                                    <span className="hobby-icon">🎵</span>
                                    <span className="hobby-name">Music</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="contact-section"
                    {...fadeIn}
                    transition={{ delay: 0.6 }}
                >
                    <h2>Let's Connect</h2>
                    <p>
                        I'm always open to discussing new projects, creative ideas, or opportunities to 
                        be part of your visions. Feel free to reach out!
                    </p>
                    <div className="contact-buttons">
                        <a href="mailto:basheersk0208@gmail.com" className="contact-btn">
                            Email Me
                        </a>
                        <a href="https://www.linkedin.com/in/basheer02/" target="_blank" rel="noopener noreferrer" className="contact-btn linkedin">
                            LinkedIn
                        </a>
                        <a href="https://github.com/basheer0208" target="_blank" rel="noopener noreferrer" className="contact-btn github">
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default About;