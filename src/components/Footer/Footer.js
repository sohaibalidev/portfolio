import React, { useEffect } from 'react';
import './Footer.css';

const Footer = ({ setActiveSection }) => {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const footerLinks = document.querySelector('.footer-links');
        if (!footerLinks) return;

        const handleClick = (e) => {
            if (e.target.tagName === 'A') {
                e.preventDefault();
                const href = e.target.getAttribute('href');
                const section = document.querySelector(href);
                if (section) {
                    setActiveSection(section.id);
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        footerLinks.addEventListener('click', handleClick);
        return () => { footerLinks.removeEventListener('click', handleClick); };
    }, [setActiveSection]);

    return (
        <footer className="portfolio-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-copyright">
                        &copy; {currentYear} Muhammad Sohaib Ali. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
