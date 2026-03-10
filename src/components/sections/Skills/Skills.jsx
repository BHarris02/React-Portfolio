import { skills } from "@/constants/skills";
import SkillGroup from "./SkillGroup";

export default function Skills() {
    return (
        <section id="skills" className="container py-5">
            <h2 className="text-white fw-bold mb-4">Skills</h2>
            <p className="text-secondary mb-5">Technologies I work with</p>
            <div className="row g-4">
                {skills.map((group) => (
                    <SkillGroup key={group.category} group={group} />
                ))}
            </div>
        </section>
    );
}