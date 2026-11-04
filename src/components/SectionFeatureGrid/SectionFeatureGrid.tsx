import { SectionHeading } from '../SectionHeading';
import { FeatureGridCard, type FeatureGridCardProps } from '../FeatureGridCard';
import styles from './SectionFeatureGrid.module.css';

export interface SectionFeatureGridProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  showRow2?: boolean;
  cards?: FeatureGridCardProps[];
  className?: string;
}

const DEFAULT_CARDS: FeatureGridCardProps[] = Array.from({ length: 6 }, () => ({}));

export function SectionFeatureGrid({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  showRow2 = true,
  cards = DEFAULT_CARDS,
  className,
}: SectionFeatureGridProps) {
  const row1 = cards.slice(0, 3);
  const row2 = cards.slice(3, 6);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.row}>
          {row1.map((card, index) => (
            <FeatureGridCard key={index} className={styles.card} {...card} />
          ))}
        </div>
        {showRow2 && row2.length > 0 && (
          <div className={styles.row}>
            {row2.map((card, index) => (
              <FeatureGridCard key={index} className={styles.card} {...card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
