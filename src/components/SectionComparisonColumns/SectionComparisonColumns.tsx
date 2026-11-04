import { SectionHeading } from '../SectionHeading';
import { CompareCard, type CompareCardProps } from '../CompareCard';
import { Callout, type CalloutProps } from '../Callout';
import styles from './SectionComparisonColumns.module.css';

export interface SectionComparisonColumnsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  columns?: CompareCardProps[];
  showColumn3?: boolean;
  showCallouts?: boolean;
  callouts?: CalloutProps[];
  className?: string;
}

const DEFAULT_COLUMNS: CompareCardProps[] = [
  { tone: 'sky' },
  { tone: 'blush' },
  { tone: 'outline' },
];

const DEFAULT_CALLOUTS: CalloutProps[] = Array.from({ length: 3 }, () => ({ style: 'accent' }));

export function SectionComparisonColumns({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  columns = DEFAULT_COLUMNS,
  showColumn3 = false,
  showCallouts = true,
  callouts = DEFAULT_CALLOUTS,
  className,
}: SectionComparisonColumnsProps) {
  const visibleColumns = showColumn3 ? columns.slice(0, 3) : columns.slice(0, 2);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.columns}>
          {visibleColumns.map((column, index) => (
            <CompareCard key={index} className={styles.column} {...column} />
          ))}
        </div>
        {showCallouts && (
          <div className={styles.callouts}>
            {callouts.map((callout, index) => (
              <Callout key={index} className={styles.callout} {...callout} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
