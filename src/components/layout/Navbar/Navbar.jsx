import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">blakeharris.dev</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
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
                </div>
            </div>
        </nav>
    );
}