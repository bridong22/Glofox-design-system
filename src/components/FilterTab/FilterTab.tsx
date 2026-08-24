import { forwardRef, type ReactNode } from 'react';
import styles from './FilterTab.module.css';

export interface FilterTabProps {
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(function FilterTab(
  { active = true, children, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.filterTab} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
      aria-pressed={active}
    >
      {children}
    </button>
  );
});
