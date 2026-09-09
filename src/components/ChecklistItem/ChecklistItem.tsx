import type { HTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './ChecklistItem.module.css';

/**
 * Confirmed live on the Pricing page tier cards (Essentials/Elite feature
 * lists) and Hero's two-column checklist — use this component for any
 * checkmark + text feature row instead of hand-composing an `Icon` (the
 * correct glyph is the plain "check", not "check-circle").
 */
export interface ChecklistItemProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
}

export function ChecklistItem({ label = 'Feature name', className, ...rest }: ChecklistItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      <Icon name="check" size={20} className={styles.icon} />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
