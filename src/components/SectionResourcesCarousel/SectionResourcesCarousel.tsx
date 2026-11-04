import { SectionHeading } from '../SectionHeading';
import { CardCarousel } from '../CardCarousel';
import { ResourceCard, type ResourceCardProps } from '../ResourceCard';
import styles from './SectionResourcesCarousel.module.css';

export interface SectionResourcesCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  perPage?: number;
  cards?: ResourceCardProps[];
  className?: string;
}

const DEFAULT_CARD: ResourceCardProps = { showEyebrow: false, showScore: true, showTag: true };
const DEFAULT_CARDS: ResourceCardProps[] = Array.from({ length: 3 }, () => DEFAULT_CARD);

export function SectionResourcesCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  perPage = 3,
  cards = DEFAULT_CARDS,
  className,
}: SectionResourcesCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <CardCarousel items={cards} perPage={perPage} renderItem={(card, index) => <ResourceCard key={index} {...card} />} />
      </div>
    </section>
  );
}
