import { useState, type ReactNode } from 'react';
import { CarouselArrow } from '../CarouselArrow';
import { ScrollIndicator } from '../ScrollIndicator';
import styles from './CardCarousel.module.css';

export interface CardCarouselProps<T> {
  items: T[];
  /** Cards shown per page/slide. */
  perPage?: number;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

/**
 * Generic paginated card row shared by every "Section/* Carousel" page
 * (Quote, Resources, Services, ...): a row of `perPage` cards, a
 * ScrollIndicator page-dot track, and a Prev/Next CarouselArrow pair.
 */
export function CardCarousel<T>({ items, perPage = 3, renderItem, className }: CardCarouselProps<T>) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(items.length / perPage));
  const visibleItems = items.slice(page * perPage, page * perPage + perPage);

  const goPrev = () => setPage((current) => Math.max(0, current - 1));
  const goNext = () => setPage((current) => Math.min(pageCount - 1, current + 1));

  const classes = [styles.cardCarousel, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.slides}>
        {visibleItems.map((item, index) => renderItem(item, page * perPage + index))}
      </div>
      <div className={styles.controls}>
        {pageCount > 1 ? (
          <ScrollIndicator style="dot" count={pageCount} active={page + 1} onSelect={(i) => setPage(i - 1)} />
        ) : (
          <span />
        )}
        <div className={styles.arrows}>
          <CarouselArrow direction="prev" onClick={goPrev} disabled={page === 0} />
          <CarouselArrow direction="next" onClick={goNext} disabled={page === pageCount - 1} />
        </div>
      </div>
    </div>
  );
}
