import { useState } from 'react';
import { CarouselArrow } from '../CarouselArrow';
import { ImagePlaceholderBlock } from '../ImagePlaceholderBlock';
import { PaginationDot } from '../PaginationDot';
import styles from './Carousel.module.css';

export interface CarouselItem {
  src?: string;
  alt?: string;
}

export interface CarouselProps {
  items: CarouselItem[];
}

export function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];

  const goPrev = () => setCurrentIndex((index) => Math.max(0, index - 1));
  const goNext = () => setCurrentIndex((index) => Math.min(items.length - 1, index + 1));

  return (
    <div className={styles.carousel}>
      <div className={styles.track}>
        <CarouselArrow direction="prev" onClick={goPrev} disabled={currentIndex === 0} />
        {currentItem && (
          <ImagePlaceholderBlock
            src={currentItem.src}
            alt={currentItem.alt}
            aspectRatio="280 / 320"
          />
        )}
        <CarouselArrow direction="next" onClick={goNext} disabled={currentIndex === items.length - 1} />
      </div>
      <div className={styles.dots}>
        {items.map((item, index) => (
          <PaginationDot
            key={item.src ?? index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
