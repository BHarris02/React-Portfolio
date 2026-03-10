import { ExperienceEntry } from '@/types/experience';
import styles from './Experience.module.css';

export default function ExperienceEntry({ entry }): { entry: ExperienceEntry } {
    return (
        <div className={styles.timelineItem}>
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
    );
}