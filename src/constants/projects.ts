import { Project } from '@/types/project';

export const projects: Project[] = [
    {
        title: "SASD Detection Tool",
        description: 
        "A tool for detecting Self-Admitted Security Debt (SASD) in software projects using NLP. Developed as part of my MEng dissertation at Queen's University Belfast.",
        tech: [
            { icon: "devicon-python-plain", color: "#3776AB", name: "Python" },
            { icon: "devicon-flask-original", color: "#fff", name: "Flask" },
            { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
            { icon: "devicon-react-plain", color: "#61DAFB", name: "React" },
            { icon: "devicon-typescript-plain", color: "#3178C6", name: "TypeScript" },
            { icon: "devicon-docker-plain", color: "#2496ED", name: "Docker" },
        ],
        repo: "https://github.com/BHarris02/sasd-detection-tool"
    },
    {
        title: "DaveBank",
        description: 
        "DaveBank is a Python-based distributed banking system demonstrating peer-to-peer networking, replication, and fault tolerance, with a simple API and GUI for node interaction.",
        tech: [
            { icon: "devicon-python-plain", color: "#3776AB", name: "Python" },
            { icon: "devicon-flask-original", color: "#fff", name: "Flask" },
            { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
            { icon: "devicon-html5-plain", color: "#E34F26", name: "HTML" },
            { icon: "devicon-css3-plain", color: "#1572B6", name: "CSS" },
        ],
        repo: "https://github.com/BHarris02/davebank"
    },
    {
        title: "GreenThumBot",
        description: 
        "GreenThumBot is an AI-driven urban greening platform developed by Queen’s University Belfast students for the 2024 Sustainability Hackathon.",
        tech: [
            { icon: "devicon-python-plain", color: "#3776AB", name: "Python" },
            { icon: "devicon-flask-original", color: "#fff", name: "Flask" },
            { icon: "devicon-typescript-plain", color: "#3178C6", name: "TypeScript" },
            { icon: "devicon-angularjs-plain", color: "#DD0031", name: "Angular" },
            { icon: "devicon-docker-plain", color: "#2496ED", name: "Docker" },
        ],
        repo: "https://github.com/BHarris02/greenthumbot"
    },
    {
        title: "React Portfolio",
        description: 
        "This is my personal portfolio website built with Next.js and deployed on Vercel, featuring a responsive, modern design and smooth navigation.",
        tech: [
            { icon: "devicon-typescript-plain", color: "#3178C6", name: "TypeScript" },
            { icon: "devicon-react-plain", color: "#61DAFB", name: "React" },
            { icon: "devicon-nextjs-plain", color: "#000", name: "Next.js" },
            { icon: "devicon-bootstrap-plain", color: "#7952B3", name: "Bootstrap" },
            { icon: "devicon-vercel-original", color: "#fff", name: "Vercel" }
        ],
        repo: "https://github.com/BHarris02/React-Portfolio"
    },
    {
        title: "BlueWatch NI",
        description: 
        "BlueWatch NI is a solution inspired by the 2025 Sustainability Hackathon: Water at Queen's University Belfast, though it was not submitted for the event.",
        tech: [
            { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
            { icon: "devicon-nodejs-plain", color: "#339933", name: "Node.js" },
            { icon: "devicon-express-original", color: "#fff", name: "Express" },
            { icon: "devicon-html5-plain", color: "#E34F26", name: "HTML" },
            { icon: "devicon-css3-plain", color: "#1572B6", name: "CSS" },
            { icon: "devicon-docker-plain", color: "#2496ED", name: "Docker" },
        ],
        repo: "https://github.com/BHarris02/bluewatch-ni"
    },
    {
        title: "Acebook",
        description: 
        "A Facebook-inspired social platform built with Java Spring Boot as part of a penultimate team project during my software engineering bootcamp.",
        tech: [
            { icon: "devicon-java-plain", color: "#007396", name: "Java" },
            { icon: "devicon-spring-original", color: "#6DB33F", name: "Spring Boot" },
            { icon: "devicon-html5-plain", color: "#E34F26", name: "HTML" },
            { icon: "devicon-bootstrap-plain", color: "#7952B3", name: "Bootstrap" },
            { icon: "devicon-docker-plain", color: "#2496ED", name: "Docker" },
        ],
        repo: ""
    },
    {
        title: "UNO",
        description: 
        "A multiplayer UNO card game wth real-time gameplay powered by WebSockets (STOMP/SockJS). Built as our final project during my Makers software engineering bootcamp.",
        tech: [
            { icon: "devicon-java-plain", color: "#007396", name: "Java" },
            { icon: "devicon-spring-original", color: "#6DB33F", name: "Spring Boot" },
            { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
            { icon: "devicon-html5-plain", color: "#E34F26", name: "HTML" },
            { icon: "devicon-css3-plain", color: "#1572B6", name: "CSS" },
        ],
        repo: "https://github.com/LapinDuMort/Uno-Pro-Gamers"
    },
    {
        title: "Swissue",
        description: 
        "\"Tinder for GitHub issues\" - swipe through open issues and find ones that match your interests and skill level.",
        tech: [
            { icon: "devicon-kotlin-plain", color: "#7F52FF", name: "Kotlin" },
            { icon: "devicon-jetpackcompose-plain", color: "#4285F4", name: "Jetpack Compose" },
            { icon: "devicon-sqlite-plain", color: "#003B57", name: "Room/SQLite" }
        ],
        repo: ""
    },
];