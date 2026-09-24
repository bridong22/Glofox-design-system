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
  /**
   * Figma "Icon" variant (Show default / Hide). 2026-09-23: Hide added for a
   * section-header row within the same list (e.g. "Add-ons for purchase:") —
   * Figma's own description says a semibold header row is done by hiding the
   * icon and manually overriding the label's font-weight (via `className`),
   * not automated as a separate property here either.
   */
  showIcon?: boolean;
}

export function ChecklistItem({
  label = 'Feature name',
  showIcon = true,
  className,
  ...rest
}: ChecklistItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {showIcon && <Icon name="check" size={20} className={styles.icon} />}
      <p className={styles.label}>{label}</p>
    </div>
  );
}
