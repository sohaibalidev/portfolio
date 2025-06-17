const skills = [
    // Core Fullstack Skills (Top Priority)
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'JavaScript (ES6+)', category: 'Frontend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'JWT & Sessions', category: 'Backend' },
    { name: 'Authorization', category: 'Backend' },

    // Real-Time & Security
    { name: 'Socket.IO', category: 'Backend' },
    { name: 'Rate Limiting', category: 'Security' },
    { name: 'Input Validation', category: 'Security' },
    { name: 'CORS & Helmet', category: 'Security' },

    // Tooling & Deployment
    { name: 'Git & GitHub', category: 'Tooling' },
    { name: 'Netlify', category: 'Deployment' },
    { name: 'Vercel', category: 'Deployment' },
    { name: 'Render', category: 'Deployment' },

    // Other Enhancements
    { name: 'Redis (Caching)', category: 'Database' },
    { name: 'Node Mailer', category: 'Email Service' },
    { name: 'Cloudinary', category: 'Media CDN' },
    { name: 'Web3Forms', category: 'Form Handling' },

    // Fundamentals
    { name: 'HTML5 & CSS3', category: 'Frontend' }
];


const projects = [
    {
        title: 'NexaEase',
        description: 'A fullstack e-commerce platform with account system, wishlist, cart functionality, MongoDB, Express.js, and email notifications.',
        technologies: ['Express', 'MongoDB', 'Nodemailer ', 'Cloudinary'],
        githubLink: 'https://github.com/muhammadsohaibali/nexaease',
        demoLink: 'https://nexaease.netlify.app/'
    },
    {
        title: 'Weather App',
        description: 'Weather App- Weather App- Weather App- Weather App- Weather App- Weather App- Weather App',
        technologies: ['Reactjs', 'WeatherAPI', 'Geonames', 'JavaScript'],
        githubLink: 'https://github.com/muhammadsohaibali/Weather-App',
        demoLink: 'https://muhammadsohaibali.github.io/Weather-App/'
    },
    {
        title: 'Loopin Social Platform',
        description: 'RESTful API for task management with user authentication and authorization.',
        technologies: ['Express', 'MongoDB', 'NodeMailer', 'Socket.io', 'Bcrypt', 'Cloudinary'],
        githubLink: 'https://github.com/muhammadsohaibali/Loopin',
        demoLink: 'https://loopin-social-platform.onrender.com/'
    }
];

const ContactObj = {
    github: 'https://github.com/muhammadsohaibali',
    email: 'msohaibaliofficial@gmail.com',
    phone: '+923324819987',
    resume: 'Resume.pdf'
}

module.exports = { skills, projects, ContactObj }