import { useMemo, useState } from 'react';
import { Logo } from '../Logo';
import { CarouselArrow } from '../CarouselArrow';
import { ScrollIndicator } from '../ScrollIndicator';
import styles from './LogoCarousel.module.css';

export interface LogoCarouselProps {
  showTitle?: boolean;
  title?: string;
  brands?: string[];
  /** Figma `Filter` property — approximates a desaturated treatment for dark backgrounds. */
  grayscale?: boolean;
  enableCarousel?: boolean;
  /** Logos shown per page when `enableCarousel` is true. */
  perPage?: number;
  className?: string;
}

const DEFAULT_BRANDS = [
  'Jazzercise',
  'Rumble',
  'F45',
  'AKT',
  'StretchLab',
  'Spartans',
  'Club Pilates',
  'Snap Fitness 24/7',
];

export function LogoCarousel({
  showTitle = true,
  title = 'Trusted by top brands around the world',
  brands = DEFAULT_BRANDS,
  grayscale = false,
  enableCarousel = false,
  perPage = 6,
  className,
}: LogoCarouselProps) {
  const [page, setPage] = useState(0);
  const pageCount = Math.max(1, Math.ceil(brands.length / perPage));
  const visibleBrands = enableCarousel ? brands.slice(page * perPage, page * perPage + perPage) : brands;

  const goPrev = () => setPage((current) => Math.max(0, current - 1));
  const goNext = () => setPage((current) => Math.min(pageCount - 1, current + 1));

  const classes = [styles.logoCarousel, className].filter(Boolean).join(' ');

  const scrollIndicator = useMemo(
    () => (pageCount > 1 ? <ScrollIndicator style="dot" count={pageCount} active={page + 1} onSelect={(index) => setPage(index - 1)} /> : null),
    [pageCount, page],
  );

  return (
    <div className={classes}>
      {showTitle && <p className={styles.title}>{title}</p>}
      <div className={styles.row}>
        {enableCarousel && <CarouselArrow direction="prev" onClick={goPrev} disabled={page === 0} />}
        <div className={[styles.logos, grayscale ? styles.grayscale : undefined].filter(Boolean).join(' ')}>
          {visibleBrands.map((brand) => (
            <Logo key={brand} brand={brand} />
          ))}
        </div>
        {enableCarousel && <CarouselArrow direction="next" onClick={goNext} disabled={page === pageCount - 1} />}
      </div>
      {enableCarousel && scrollIndicator}
    </div>
  );
}
