import { SectionHeading } from '../SectionHeading';
import { ComparisonTableCompact, type ComparisonTableCompactProps } from '../ComparisonTableCompact';
import { CtaGroup, type CtaGroupProps } from '../CtaGroup';
import styles from './SectionComparisonTable.module.css';

export interface SectionComparisonTableProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  table?: ComparisonTableCompactProps;
  cta?: CtaGroupProps;
  className?: string;
}

export function SectionComparisonTable({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  table,
  cta,
  className,
}: SectionComparisonTableProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <ComparisonTableCompact {...table} />
        <CtaGroup {...cta} />
      </div>
    </section>
  );
}
