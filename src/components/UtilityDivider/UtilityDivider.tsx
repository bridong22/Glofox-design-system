import type { HTMLAttributes } from 'react';
import styles from './UtilityDivider.module.css';

export type UtilityDividerProps = HTMLAttributes<HTMLHRElement>;

export function UtilityDivider({ className, ...rest }: UtilityDividerProps) {
  const classes = [styles.divider, className].filter(Boolean).join(' ');

  return <hr className={classes} {...rest} />;
}
