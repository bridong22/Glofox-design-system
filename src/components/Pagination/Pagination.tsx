import { CarouselArrow } from '../CarouselArrow';
import styles from './Pagination.module.css';

export interface PaginationProps {
  /** Current active page, 1-indexed. */
  currentPage: number;
  /** Total number of pages. */
  totalPages: number;
  /** Called with the new page number when a page or arrow is clicked. */
  onPageChange?: (page: number) => void;
  className?: string;
}

/**
 * Builds a sliding 3-number window centered on `currentPage`, clamped to the
 * valid page range. Reproduces the same First/Middle/Last visual patterns
 * the Figma component mocks as three static frames, driven by real page math:
 *  - page 1 of N       -> [1, 2, 3]              (Figma "First")
 *  - page in the middle -> [page - 1, page, page + 1] (Figma "Middle")
 *  - last page of N     -> [N - 2, N - 1, N]      (Figma "Last")
 */
function getPageWindow(currentPage: number, totalPages: number): number[] {
  if (totalPages <= 3) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const start = Math.min(Math.max(currentPage - 1, 1), totalPages - 2);
  return [start, start + 1, start + 2];
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const safeTotalPages = Math.max(totalPages, 1);
  const safeCurrentPage = Math.min(Math.max(currentPage, 1), safeTotalPages);
  const pages = getPageWindow(safeCurrentPage, safeTotalPages);

  const showPrev = safeCurrentPage > 1;
  const showNext = safeCurrentPage < safeTotalPages;

  const classes = className ? `${styles.pagination} ${className}` : styles.pagination;

  return (
    <nav className={classes} aria-label="Pagination">
      {showPrev && (
        <CarouselArrow direction="prev" onClick={() => onPageChange?.(safeCurrentPage - 1)} />
      )}
      {pages.map((page) => {
        const isActive = page === safeCurrentPage;
        return (
          <button
            key={page}
            type="button"
            className={isActive ? styles.pageActive : styles.pageInactive}
            onClick={() => onPageChange?.(page)}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        );
      })}
      {showNext && (
        <CarouselArrow direction="next" onClick={() => onPageChange?.(safeCurrentPage + 1)} />
      )}
    </nav>
  );
}
