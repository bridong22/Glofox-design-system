import { forwardRef, type ReactNode } from 'react';
import styles from './FilterTab.module.css';

export interface FilterTabProps {
  active?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

export const FilterTab = forwardRef<HTMLButtonElement, FilterTabProps>(function FilterTab(
  { active = true, disabled = false, children, onClick },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={`${styles.filterTab} ${active ? styles.active : styles.inactive}`}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
    >
      {children}
    </button>
  );
});
