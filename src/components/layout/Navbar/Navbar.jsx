import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className="container d-flex align-items-center justify-content-between gap-3 py-4 py-3">
            <a href="#" className="navbar-brand text-white fs-4">blakeharris.dev</a>

            <ul className="nav gap-5 d-none d-lg-flex align-items-center list-unstyled mb-0">
                <li>
                    <a href="#about" className={`${styles.hoverLink} text-white text-decoration-none fs-5`}>About</a>
                </li>
                <li>
                    <a href="#experience" className={`${styles.hoverLink} text-white text-decoration-none fs-5`}>Experience</a>
                </li>
                <li>
                    <a href="#skills" className={`${styles.hoverLink} text-white text-decoration-none fs-5`}>Skills</a>
                </li>
                <li>
                    <a href="#projects" className={`${styles.hoverLink} text-white text-decoration-none fs-5`}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className={`${styles.hoverLink} text-white text-decoration-none fs-5`}>Contact</a>
                </li>
            </ul>
            <div className="d-flex gap-2">
                <a href="#" className="btn btn-outline-light">
                    <FaGithub size={24} />
                </a>
                <a href="#" className="btn btn-outline-light">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </nav>
    );
}