import styles from './About.module.css';
import { about } from '@/constants/about';

export default function About() {
    return (
        <section id="about" className="container py-5">
            <h2 className={`text-white fw-bold mb-4 ${styles.sectionTitle}`}>About Me</h2>
            <div className="row">
                <div className="col-lg-8">
                    {about.map((text, i) => (
                        <p key={i} className="text-secondary fs-5 mb-3">{text}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}