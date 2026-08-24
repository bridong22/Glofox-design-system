import { forwardRef } from 'react';
import styles from './PaginationDot.module.css';

export interface PaginationDotProps {
  active?: boolean;
  onClick?: () => void;
}

export const PaginationDot = forwardRef<HTMLButtonElement, PaginationDotProps>(
  function PaginationDot({ active = true, onClick }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={`${styles.paginationDot} ${active ? styles.active : styles.inactive}`}
        onClick={onClick}
        aria-current={active}
        aria-label="Pagination dot"
      />
    );
  },
);
