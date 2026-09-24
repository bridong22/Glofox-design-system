import { Icon } from '../Icon';
import styles from './StepIndicator.module.css';

/**
 * Single circle node for a multi-step wizard progress tracker (e.g. the
 * pricing wizard's Business Type → Locations → Details → Pricing flow).
 * Compose N instances in a row with a connecting line between each and a
 * label below each step.
 */
export interface StepIndicatorProps {
  state?: 'upcoming' | 'active' | 'completed';
}

export function StepIndicator({ state = 'upcoming' }: StepIndicatorProps) {
  return (
    <div className={`${styles.step} ${styles[state]}`}>
      {state === 'completed' && <Icon name="check" size={14} className={styles.check} />}
      {state === 'active' && <span className={styles.dot} />}
    </div>
  );
}
