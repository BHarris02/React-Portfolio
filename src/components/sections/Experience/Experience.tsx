import styles from './Experience.module.css';
import ExperienceEntry from './ExperienceEntry';
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
                            <ExperienceEntry key={entry.title} entry={entry} />  
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}