import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: 'small' | 'large';
}

export function Badge({ children, size = 'large', className, ...rest }: BadgeProps) {
  const classes = [styles.badge, styles[size], className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
