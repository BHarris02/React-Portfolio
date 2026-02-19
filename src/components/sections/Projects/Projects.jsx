import { projects } from "@/constants/projects";
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section id="projects" className="container py-5">
            <h2 className={`text-white fw-bold mb-2 ${styles.sectionTitle}`}>Projects</h2>
            <p className="text-secondary mb-5">
                A mix of personal and academic projects
            </p>
            <div className="row g-4">
                {projects.map((project) => (
                    <div key={project.title} className="col-md-6 col-lg-4">
                        <div className={`${styles.card} p-4 h-100 d-flex flex-column`}>
                            <h4 className={`text-white fw-semibold fs-5 mb-2 ${styles.title}`}>
                                {project.title}
                            </h4>
                            <div className="d-flex gap-2 mb-2">
                                {project.tech.map((t, i) => (
                                    <i
                                    key={i}
                                    className={`${t.icon} ${styles.techIcon}`}
                                    style={{ color: t.color }}
                                    >
                                        <span className={styles.tooltip}>{t.name}</span>
                                    </i>
                                ))}
                            </div>
                            <p className="text-secondary flex-grow-1">{project.description}</p>
                            {project.repo ? (
                                <a 
                                href={project.repo}
                                className={`btn btn-outline-light mt-auto align-self-start`}
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    View Repository
                                </a>
                            ) : (
                                <span className={`btn btn-outline-light mt-auto align-self-start disabled`}>
                                    Coming Soon!
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}