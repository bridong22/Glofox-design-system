import { Icon } from '../Icon';
import styles from './NumberedStep.module.css';

/**
 * Chrome-less numbered list item: circular index badge + icon/title row +
 * one-line description. Used for sequential how-it-works flows.
 */
export interface NumberedStepProps {
  step?: number;
  iconName?: string;
  title?: string;
  description?: string;
}

export function NumberedStep({
  step = 1,
  iconName = 'users',
  title = 'Match with a Specialist',
  description = 'We match you with a Glofox specialist who knows your type of business.',
}: NumberedStepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.badge}>
        <span className={styles.number}>{step}</span>
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <Icon name={iconName} size={16} className={styles.icon} />
          <p className={styles.title}>{title}</p>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
