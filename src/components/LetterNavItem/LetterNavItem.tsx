import { forwardRef } from 'react';
import styles from './LetterNavItem.module.css';

export interface LetterNavItemProps {
  letter: string;
  /** Figma "State" variant. Active = letter has at least one term below (clickable jump link). Inactive = no terms yet for that letter (muted, non-interactive). */
  active?: boolean;
  onClick?: () => void;
}

export const LetterNavItem = forwardRef<HTMLButtonElement, LetterNavItemProps>(function LetterNavItem(
  { letter, active = true, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.item} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
      disabled={!active}
    >
      {letter}
    </button>
  );
});
