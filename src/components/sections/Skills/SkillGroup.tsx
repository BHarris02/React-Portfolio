import { SkillCategory } from '@/types/skill';
import SkillIcon from './SkillIcon';
import styles from './Skills.module.css';

type SkillGroupProps = {
    group: SkillCategory
}

export default function SkillGroup({ group }: SkillGroupProps) {
    return (
        <div className="col-md-4">
            <div className={`${styles.card} p-4 h-100`}>
                <h4 className="text-white fw-semibold mb-4 text-center">{group.category}</h4>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                    {group.items.map((skill) => (
                        <SkillIcon key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}
