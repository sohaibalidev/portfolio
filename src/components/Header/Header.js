import React from 'react';
import './Header.css';

const Header = ({ activeSection, setActiveSection }) => {
    const handleNavClick = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="portfolio-header">
            <div className="header-container">
                <div className="logo">Sohaib Ali</div>
                <nav className="nav-menu">
                    <button
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                        onClick={() => handleNavClick('home')}
                    >
                        Home
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                        onClick={() => handleNavClick('about')}
                    >
                        About
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                        onClick={() => handleNavClick('skills')}
                    >
                        Skills
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                        onClick={() => handleNavClick('projects')}
                    >
                        Projects
                    </button>
                    <button
                        className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                        onClick={() => handleNavClick('contact')}
                    >
                        Contact
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;