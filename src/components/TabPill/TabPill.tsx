import { forwardRef, type ReactNode } from 'react';
import styles from './TabPill.module.css';

export interface TabPillProps {
  active?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const TabPill = forwardRef<HTMLButtonElement, TabPillProps>(function TabPill(
  { active = true, disabled = false, children, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.tabPill} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
    >
      {children}
    </button>
  );
});
