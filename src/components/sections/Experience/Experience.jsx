import styles from './Experience.module.css';
import { experience } from '@/constants/experience';

export default function Experience() {
    return (
        <section id="experience" className="container py-5">
            <h2 className="text-white fw-bold mb-2">Experience</h2>
            <p className="text-secondary mb-5">My journey so far</p>
            <div className="row">
                <div className="col-lg-8">
                    <div className={styles.timeline}>
                        {experience.map((entry) => (
                            <div key={entry.title} className={styles.timelineItem}>
                                <span className={styles.dot}></span>
                                <div className={`${styles.card} p-4`}>
                                    <span className="text-secondary small">{entry.date}</span>
                                    <h4 className="text-white fw-semibold fs-5 mt-1 mb-0">{entry.title}</h4>
                                    <span className="text-primary text-white">{entry.company}</span>
                                    <p className="text-secondary mt-2 b-2">{entry.description}</p>
                                    <ul className="text-secondary ps-3 mb-0">
                                        {entry.achievements.map((a, i) => (
                                            <li key={i} className="mb-1">{a}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}