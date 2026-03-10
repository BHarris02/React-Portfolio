import { TechItem } from '@/types/tech';
import styles from './Skills.module.css';

type SkillIconProps = {
    skill: TechItem
}

export default function SkillIcon({ skill }: SkillIconProps) {
    return (
        <i
        className={`${skill.icon} ${styles.skillIcon}`}
        style={{ color: skill.color }}
        >
            <span className={styles.tooltip}>{skill.name}</span>
        </i>
    );
}
