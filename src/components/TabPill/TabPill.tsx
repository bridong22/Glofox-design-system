import { forwardRef, type ReactNode } from 'react';
import styles from './TabPill.module.css';

export interface TabPillProps {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const TabPill = forwardRef<HTMLButtonElement, TabPillProps>(function TabPill(
  { active = true, children, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.tabPill} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  );
});
