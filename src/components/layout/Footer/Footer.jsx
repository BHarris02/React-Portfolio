import { socials } from "@/constants/socials";

export default function Footer() {
    return (
        <footer id="contact" className="container py-5">
            <hr className="border-secondary mb-5" />
            <div>
                <h2 className="text-white fw-bold mb-2">Get In Touch</h2>
                <p className="text-secondary mb-4"> Feel free to reach out via LinkedIn or checkout my work on GitHub.</p>
                <div className="d-flex gap-4 mb-5">
                    {socials.map((social) => (
                        <a 
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-3"
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>
            </div>
            <p className="text-secondary small mb-0">
                &copy; {new Date().getFullYear()} Blake Harris. All rights reserved.
            </p>
        </footer>
    );
}