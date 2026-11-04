import { SectionHeading } from '../SectionHeading';
import { CardCarousel } from '../CardCarousel';
import { ImageTileCard, type ImageTileCardProps } from '../ImageTileCard';
import styles from './SectionServicesCarousel.module.css';

export interface SectionServicesCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  perPage?: number;
  cards?: ImageTileCardProps[];
  className?: string;
}

const DEFAULT_CARDS: ImageTileCardProps[] = Array.from({ length: 4 }, () => ({}));

export function SectionServicesCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  perPage = 4,
  cards = DEFAULT_CARDS,
  className,
}: SectionServicesCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <CardCarousel items={cards} perPage={perPage} renderItem={(card, index) => <ImageTileCard key={index} {...card} />} />
      </div>
    </section>
  );
}
