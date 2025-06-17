import React from 'react';
import './Hero.css';

const Hero = ({ id, setActiveSection, resumeFileName }) => {
    React.useEffect(() => {
        setActiveSection('home');
    }, [setActiveSection]);

    console.log(resumeFileName)
    return (
        <section id={id} className="hero-section">
            <div className="hero-content">
                <div className="profile-image-placeholder">
                    <img src={`${process.env.PUBLIC_URL}/assets/avatar.jpg`} className='image-placeholder' alt="" />
                </div>
                <div className="hero-text">
                    <h1>Muhammad Sohaib Ali</h1>
                    <h2>Fullstack Web Developer</h2>
                    <p className="tagline">I'm a self-taught fullstack developer with a passion
                        for solving real-world problems using code — focused on secure, scalable
                        apps with clean UI and solid backend.</p>
                    <div className="hero-buttons">
                        <a href="#contact" className="btn primary-btn">Contact Me</a>
                        <a href={`${process.env.PUBLIC_URL}/resume/${resumeFileName}`}
                            className="btn secondary-btn" download>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;