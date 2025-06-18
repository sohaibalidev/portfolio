import { Github, ExternalLink as ExternalLinkIcon } from 'lucide-react';
import './Projects.css';

const Projects = ({ id, projects }) => {
    return (
        <section id={id} className="section projects-section">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card view-on-github-parent">
                            {project.image && (
                                <img src={project.image} alt={project.title}
                                    className="project-image" loading="lazy" />
                            )}
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-technologies">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links view-on-github">
                                {/* <a href={project.githubLink} target="_blank"
                                    rel="noopener noreferrer" className="btn github-btn">
                                    View on GitHub
                                </a> */}
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                                    className="btn github-btn">
                                    <Github />
                                    <span>GitHub</span>
                                </a>
                                {project.demoLink !== '#' && (
                                    // <a href={project.demoLink} target="_blank"
                                    //     rel="noopener noreferrer" className="btn demo-btn">
                                    //     Live Demo
                                    // </a>
                                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer"
                                        className="btn demo-btn">
                                        <ExternalLinkIcon />
                                        <span>Live</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;