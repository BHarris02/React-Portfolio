import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={`container d-flex align-items-center ${styles.hero}`}>

            <div>
                <h4 className="text-secondary fw-semibold fs-6 mb-3">
                    JUNIOR SOFTWARE DEVELOPER | FLASK • SPRING BOOT • ANDROID • SQL
                </h4>
                <h1 className="text-white fw-bold display-4 mb-4 lh-sm">
                    {"Hi, I'm"} <span className={styles.outlineText}>Blake</span>, 
                    a Software Developer
                </h1>
                <a href="#" className="btn btn-outline-light btn-lg">
                    Download CV
                </a>
            </div>
        </header>
    );
}