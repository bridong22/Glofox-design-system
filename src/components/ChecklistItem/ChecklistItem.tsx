import type { HTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './ChecklistItem.module.css';

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
