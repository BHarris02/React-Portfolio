import { skills } from "@/constants/skills";
import styles from './Skills.module.css';

export default function Skills() {
    return (
        <section id="skills" className="container py-5">
            <h2 className="text-white fw-bold mb-4">Skills</h2>
            <p className="text-secondary mb-5">Technologies I work with</p>
            <div className="row g-4">
                {skills.map((group) => (
                    <div key={group.category} className="col-md-4">
                        <div className={`${styles.card} p-4 h-100`}>
                            <h4 className="text-white fw-semibold mb-4 text-center">{group.category}</h4>
                            <div className="d-flex flex-wrap justify-content-center gap-3">
                                {group.items.map((skill) => (
                                    <i
                                    key={skill.name}
                                    className={`${skill.icon} ${styles.skillIcon}`}
                                    style={{ color: skill.color }}
                                    >
                                        <span className={styles.tooltip}>{skill.name}</span>
                                    </i>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
}