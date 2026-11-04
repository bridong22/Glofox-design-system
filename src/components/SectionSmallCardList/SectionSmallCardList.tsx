import { SectionHeading } from '../SectionHeading';
import { FeatureListCard, type FeatureListCardProps } from '../FeatureListCard';
import styles from './SectionSmallCardList.module.css';

export interface SectionSmallCardListProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  cards?: FeatureListCardProps[];
  showCard4?: boolean;
  className?: string;
}

const DEFAULT_CARD: FeatureListCardProps = { iconName: 'marketing' };
const DEFAULT_CARDS: FeatureListCardProps[] = Array.from({ length: 4 }, () => DEFAULT_CARD);

export function SectionSmallCardList({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  cards = DEFAULT_CARDS,
  showCard4 = true,
  className,
}: SectionSmallCardListProps) {
  const visibleCards = showCard4 ? cards.slice(0, 4) : cards.slice(0, 3);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        {visibleCards.map((card, index) => (
          <FeatureListCard key={index} className={styles.card} {...card} />
        ))}
      </div>
    </section>
  );
}
