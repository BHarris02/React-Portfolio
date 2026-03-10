import { projects } from "@/constants/projects";
import styles from './Projects.module.css';
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="container py-5">
            <h2 className={`text-white fw-bold mb-2 ${styles.sectionTitle}`}>Projects</h2>
            <p className="text-secondary mb-5">
                A mix of personal and academic projects
            </p>
            <div className="row g-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}