import './About.css';

const About = ({ id, github }) => {
    return (
        <section id={id} className="section about-section">
            <div className="section-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hello! I'm Sohaib, a passionate self-taught developer from Pakistan with a strong focus
                            on backend and fullstack web development. I recently completed high school and am
                            preparing to pursue a degree in Software Engineering.
                        </p>
                        <p>
                            Despite being early in my formal education, I've already built several full-stack
                            projects using technologies like React, Node.js, Express, and MongoDB. I'm particularly
                            fascinated by backend topics like authentication, JWT, email verification, sessions,
                            and access control with tools like Redis and Socket.IO.
                        </p>
                        <p>
                            I'm also comfortable with REST APIs, Git, and deployment platforms like Netlify and
                            Render. My goal is to grow as a developer, contribute to impactful projects, and
                            eventually lead teams to build secure, scalable web apps.
                        </p>
                    </div>
                    <div className="about-details">
                        <h3>Personal Info</h3>
                        <ul>
                            <li><strong>Full Name:</strong> Muhammad Sohaib Ali</li>
                            <li><strong>Based in:</strong> Pakistan</li>
                            <li><strong>GitHub:</strong>
                                <a href={github} target="_blank" rel="noreferrer">
                                    {github.split('//')[1]}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;