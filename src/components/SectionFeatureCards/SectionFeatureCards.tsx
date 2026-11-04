import { SectionHeading } from '../SectionHeading';
import { Card, type CardProps } from '../Card';
import { CtaGroup, type CtaGroupProps } from '../CtaGroup';
import styles from './SectionFeatureCards.module.css';

export interface SectionFeatureCardsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  cards?: CardProps[];
  showCta?: boolean;
  cta?: CtaGroupProps;
  className?: string;
}

const DEFAULT_CARD: CardProps = { iconName: 'megaphone' };
const DEFAULT_CARDS: CardProps[] = Array.from({ length: 3 }, () => DEFAULT_CARD);

export function SectionFeatureCards({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  cards = DEFAULT_CARDS,
  showCta = true,
  cta,
  className,
}: SectionFeatureCardsProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.row}>
          {cards.map((card, index) => (
            <Card key={index} className={styles.card} {...card} />
          ))}
        </div>
        {showCta && <CtaGroup {...cta} />}
      </div>
    </section>
  );
}
