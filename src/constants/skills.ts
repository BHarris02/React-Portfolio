import { SkillCategory } from '@/types/skill';

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        items: [
            { icon: "devicon-python-plain", color: "#3776AB", name: "Python" },
            { icon: "devicon-java-plain", color: "#007396", name: "Java" },
            { icon: "devicon-kotlin-plain", color: "#7F52FF", name: "Kotlin" },
            { icon: "devicon-javascript-plain", color: "#F7DF1E", name: "JavaScript" },
            { icon: "devicon-html5-plain", color: "#E34F26", name: "HTML" },
            { icon: "devicon-css3-plain", color: "#1572B6", name: "CSS" },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { icon: "devicon-flask-original", color: "#fff", name: "Flask" },
            { icon: "devicon-spring-original", color: "#6DB33F", name: "Spring Boot" },
            { icon: "devicon-jetpackcompose-plain", color: "#4285F4", name: "Jetpack Compose" },
            { icon: "devicon-bootstrap-plain", color: "#7952B3", name: "Bootstrap" },
            { icon: "devicon-react-plain", color: "#61DAFB", name: "React" },
            { icon: "devicon-nextjs-plain", color: "#000", name: "Next.js" },
        ],
    },
    {
        category: "Tools & Platforms",
        items: [
            { icon: "devicon-github-original", color: "#fff", name: "GitHub" },
            { icon: "devicon-docker-plain", color: "#2496ED", name: "Docker" },
            { icon: "devicon-azuresqldatabase-plain", color: "#e8c44d", name: "SQL" },
            { icon: "devicon-gradle-original", color: "#02303A", name: "Gradle" },
            { icon: "devicon-vercel-original", color: "#fff", name: "Vercel" }
        ],
    },
];