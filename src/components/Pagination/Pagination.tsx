import { Icon } from '../Icon';
import styles from './Pagination.module.css';

export interface PaginationProps {
  /** Current active page, 1-indexed. */
  currentPage: number;
  /** Total number of pages. */
  totalPages: number;
  /** Called with the new page number when a page or arrow is clicked. */
  onPageChange?: (page: number) => void;
  /** Figma "Layout" variant. 'compact' shows a "Page X of Y" label with just Prev/Next, for narrow layouts. */
  layout?: 'full' | 'compact';
  className?: string;
}

type PageItem = number | 'ellipsis';

/**
 * Builds the page-number list with a single ellipsis collapsing whichever
 * side is far from `currentPage` — always pins the first and last page.
 * Reproduces the exact windowing observed across Figma's 12-page examples.
 */
function getPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
}

export function Pagination({ currentPage, totalPages, onPageChange, layout = 'full', className }: PaginationProps) {
  const safeTotalPages = Math.max(totalPages, 1);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const isPrevDisabled = safeCurrentPage <= 1;
  const isNextDisabled = safeCurrentPage >= safeTotalPages;

  const classes = [styles.pagination, className].filter(Boolean).join(' ');

  return (
    <nav className={classes} aria-label="Pagination">
      <button
        type="button"
        className={styles.arrowItem}
        disabled={isPrevDisabled}
        onClick={() => onPageChange?.(safeCurrentPage - 1)}
        aria-label="Previous page"
      >
        <Icon name="chevron-left" size={16} />
      </button>

      {layout === 'compact' ? (
        <p className={styles.compactLabel}>
          Page {safeCurrentPage} of {safeTotalPages}
        </p>
      ) : (
        getPageItems(safeCurrentPage, safeTotalPages).map((item, index) =>
          item === 'ellipsis' ? (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              …
            </span>
          ) : (
            <button
              key={item}
              type="button"
              className={item === safeCurrentPage ? styles.numberItemActive : styles.numberItem}
              onClick={() => onPageChange?.(item)}
              aria-current={item === safeCurrentPage ? 'page' : undefined}
              aria-label={`Page ${item}`}
            >
              {item}
            </button>
          ),
        )
      )}

      <button
        type="button"
        className={styles.arrowItem}
        disabled={isNextDisabled}
        onClick={() => onPageChange?.(safeCurrentPage + 1)}
        aria-label="Next page"
      >
        <Icon name="chevron-right" size={16} />
      </button>
    </nav>
  );
}
