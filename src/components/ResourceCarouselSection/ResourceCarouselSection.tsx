import { useState } from 'react';
import { CarouselControls } from '../CarouselControls';
import { ImagePlaceholderBlock } from '../ImagePlaceholderBlock';
import { LinkArrow } from '../LinkArrow';
import { SectionHeaderWithLink } from '../SectionHeaderWithLink';
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

function CarouselCard({ image, category = 'Business Tips', title, href = '#' }: ResourceCarouselSectionCard) {
  return (
    <div className={styles.card}>
      <ImagePlaceholderBlock src={image} alt={title} aspectRatio="280 / 180" />
      <p className={styles.cardCategory}>{category}</p>
      <p className={styles.cardTitle}>{title}</p>
      <LinkArrow href={href} className={styles.cardLink}>
        See All
      </LinkArrow>
    </div>
  );
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
          <CarouselCard key={card.title} {...card} />
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
