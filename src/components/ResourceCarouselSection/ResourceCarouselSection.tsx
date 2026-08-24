import { useState } from 'react';
import { SectionHeaderWithLink } from '../SectionHeaderWithLink';
import { BlogResourceCard } from '../BlogResourceCard';
import { CarouselControls } from '../CarouselControls';
import styles from './ResourceCarouselSection.module.css';

export interface ResourceCarouselSectionCard {
  image?: string;
  category?: string;
  title: string;
  href?: string;
}

export interface ResourceCarouselSectionProps {
  title: string;
  href?: string;
  linkLabel?: string;
  cards: ResourceCarouselSectionCard[];
}

export function ResourceCarouselSection({ title, href, linkLabel, cards }: ResourceCarouselSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const maxStartIndex = Math.max(0, cards.length - visibleCount);
  const visibleCards = cards.slice(startIndex, startIndex + visibleCount);
  const progress = maxStartIndex === 0 ? 100 : (startIndex / maxStartIndex) * 100;

  return (
    <div className={styles.resourceCarouselSection}>
      <SectionHeaderWithLink title={title} href={href} linkLabel={linkLabel} />
      <div className={styles.row}>
        {visibleCards.map((card) => (
          <BlogResourceCard
            key={card.title}
            image={card.image}
            category={card.category}
            title={card.title}
            href={card.href}
          />
        ))}
      </div>
      <CarouselControls
        progress={progress}
        onPrev={() => setStartIndex((index) => Math.max(0, index - 1))}
        onNext={() => setStartIndex((index) => Math.min(maxStartIndex, index + 1))}
        prevDisabled={startIndex === 0}
        nextDisabled={startIndex >= maxStartIndex}
      />
    </div>
  );
}
