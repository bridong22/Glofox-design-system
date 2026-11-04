import { SectionHeading } from '../SectionHeading';
import { CompareCard, type CompareCardProps } from '../CompareCard';
import styles from './SectionPlainTextCards.module.css';

export interface SectionPlainTextCardsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  tone?: 'sky' | 'blush' | 'outline';
  cards?: CompareCardProps[];
  className?: string;
}

const DEFAULT_CARDS: CompareCardProps[] = [{}, {}, {}];

export function SectionPlainTextCards({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  tone = 'sky',
  cards = DEFAULT_CARDS,
  className,
}: SectionPlainTextCardsProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <CompareCard key={index} tone={tone} className={styles.card} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
