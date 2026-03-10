import { Project } from '@/types/project';
import ProjectRepoButton from './ProjectRepoButton';
import styles from './Projects.module.css';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="col-md-6 col-lg-4">
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
                <ProjectRepoButton repo={project.repo} />
            </div>
        </div>
    );
}