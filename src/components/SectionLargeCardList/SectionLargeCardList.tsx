import { SectionHeading } from '../SectionHeading';
import { PillarCard, type PillarCardProps } from '../PillarCard';
import { CtaGroup } from '../CtaGroup';
import styles from './SectionLargeCardList.module.css';

export interface SectionLargeCardListProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  cards?: PillarCardProps[];
  showCard3?: boolean;
  showCta?: boolean;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  showSecondaryCta?: boolean;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

const DEFAULT_CARDS: PillarCardProps[] = [
  { imagePosition: 'right' },
  { imagePosition: 'left' },
  { imagePosition: 'right' },
];

export function SectionLargeCardList({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  cards = DEFAULT_CARDS,
  showCard3 = true,
  showCta = true,
  primaryLabel,
  onPrimaryClick,
  showSecondaryCta = true,
  secondaryLabel,
  onSecondaryClick,
  className,
}: SectionLargeCardListProps) {
  const visibleCards = showCard3 ? cards.slice(0, 3) : cards.slice(0, 2);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        {visibleCards.map((card, index) => (
          <PillarCard key={index} {...card} />
        ))}
        {showCta && (
          <CtaGroup
            primaryLabel={primaryLabel}
            onPrimaryClick={onPrimaryClick}
            showSecondary={showSecondaryCta}
            secondaryLabel={secondaryLabel}
            onSecondaryClick={onSecondaryClick}
          />
        )}
      </div>
    </section>
  );
}
