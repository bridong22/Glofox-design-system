import { SectionHeading } from '../SectionHeading';
import { StatStrip, type Stat } from '../StatStrip';
import styles from './SectionImprovementScores.module.css';

export interface SectionImprovementScoresProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  scores?: Stat[];
  className?: string;
}

const DEFAULT_SCORES: Stat[] = Array.from({ length: 4 }, () => ({
  prefix: 'up to',
  value: '97%+',
  label: 'Collection Rates',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  source: 'Source: ABC Fitness customer data, 2025',
}));

export function SectionImprovementScores({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  scores = DEFAULT_SCORES,
  className,
}: SectionImprovementScoresProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <StatStrip stats={scores} />
      </div>
    </section>
  );
}
