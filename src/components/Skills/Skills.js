import React from 'react';
import './Skills.css';

const Skills = ({ id, skills }) => {
    return (
        <section id={id} className="section skills-section">
            <div className="section-container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className={`skill-card ${skill.category}`}>
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-category">{skill.category}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;