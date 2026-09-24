import type { HTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './Badge.module.css';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  size?: 'small' | 'large';
  /**
   * Figma "Show Icon" property, added 2026-09-23 (default false, matching
   * current live badges — no icon on abcfitness.com/glofox.com today).
   * PROPOSED: the glyph itself (checkmark-in-circle) is a placeholder per
   * Figma's own description, pending a real icon decision.
   */
  showIcon?: boolean;
  iconName?: string;
}

export function Badge({
  children,
  size = 'large',
  showIcon = false,
  iconName = 'check-circle',
  className,
  ...rest
}: BadgeProps) {
  const classes = [styles.badge, styles[size], className].filter(Boolean).join(' ');

  return (
    <span className={classes} {...rest}>
      {showIcon && <Icon name={iconName} size={size === 'large' ? 14 : 12} className={styles.icon} />}
      {children}
    </span>
  );
}
