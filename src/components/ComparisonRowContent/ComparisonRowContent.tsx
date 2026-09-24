import { Icon } from '../Icon';
import styles from './ComparisonRowContent.module.css';

/**
 * Single comparison-table cell, used inside ComparisonRow. `type="icon"`
 * shows a checkmark (yes/included); `type="text"` shows an editable label
 * for values that aren't a plain yes/no — pricing, "Add-on", "N/A", etc.
 */
export interface ComparisonRowContentProps {
  type?: 'text' | 'icon';
  value?: string;
  iconName?: string;
}

export function ComparisonRowContent({ type = 'text', value = 'Text', iconName = 'check' }: ComparisonRowContentProps) {
  return (
    <div className={styles.cell}>
      {type === 'icon' ? (
        <Icon name={iconName} size={24} className={styles.icon} />
      ) : (
        <p className={styles.text}>{value}</p>
      )}
    </div>
  );
}
