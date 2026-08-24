import type { ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './CategoryIconBadge.module.css';

export interface CategoryIconBadgeProps {
  icon: string;
  children: ReactNode;
}

export function CategoryIconBadge({ icon, children }: CategoryIconBadgeProps) {
  return (
    <div className={styles.badge}>
      <Icon name={icon} size={20} className={styles.icon} />
      <span className={styles.label}>{children}</span>
    </div>
  );
}
