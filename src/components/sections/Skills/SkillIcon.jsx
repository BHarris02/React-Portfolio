import styles from './Skills.module.css';

export default function SkillIcon({ skill }) {
    return (
        <i
        className={`${skill.icon} ${styles.skillIcon}`}
        style={{ color: skill.color }}
        >
            <span className={styles.tooltip}>{skill.name}</span>
        </i>
    );
}
