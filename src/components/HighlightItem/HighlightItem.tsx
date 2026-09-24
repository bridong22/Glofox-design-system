import { Icon } from '../Icon';
import styles from './HighlightItem.module.css';

/**
 * Icon + title + one-line description at tiny (12px) scale — smaller
 * sibling of FeatureListItem, used inside HighlightSection for add-on
 * call-outs.
 */
export interface HighlightItemProps {
  title?: string;
  description?: string;
}

export function HighlightItem({
  title = 'ABC XLerate automated sales engagement',
  description = 'Automate custom email & SMS outreach to convert trials and reduce member churn.',
}: HighlightItemProps) {
  return (
    <div className={styles.item}>
      <Icon name="check" size={20} className={styles.icon} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
