import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './CategoryChip.module.css';

export interface CategoryChipProps extends HTMLAttributes<HTMLSpanElement> {
  icon?: string;
  children: ReactNode;
}

export function CategoryChip({ icon, children, className, ...rest }: CategoryChipProps) {
  const classes = [styles.chip, className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {icon && <Icon name={icon} size={12} className={styles.icon} />}
      {children}
    </span>
  );
}
