import { useState } from 'react';
import { Button } from '../Button';
import { CarouselArrow } from '../CarouselArrow';
import { ResourceCard, type ResourceCardProps } from '../ResourceCard';
import { PaginationDot } from '../PaginationDot';
import styles from './Carousel.module.css';

export type CarouselItem = ResourceCardProps;

export interface CarouselProps {
  title?: string;
  subtitle?: string;
  items: CarouselItem[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function Carousel({
  title = 'Who We Serve',
  subtitle = 'Built for class-led fitness businesses of all kinds, from independent studios to growing gym brands.',
  items,
  ctaLabel = 'See all customer stories',
  onCtaClick,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const goPrev = () => setCurrentIndex((index) => Math.max(0, index - 1));
  const goNext = () => setCurrentIndex((index) => Math.min(items.length - 1, index + 1));

  return (
    <div className={styles.carousel}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.track}>
        <CarouselArrow direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
        {currentItem && <ResourceCard {...currentItem} />}
        <CarouselArrow direction="next" onClick={goNext} disabled={currentIndex === items.length - 1} />
      </div>
      <div className={styles.dots}>
        {items.map((item, index) => (
          <PaginationDot
            key={item.title ?? index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <Button variant="outline" size="large" className={styles.cta} onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
