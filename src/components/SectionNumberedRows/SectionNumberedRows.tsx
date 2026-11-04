import { SectionHeading } from '../SectionHeading';
import { NumberedRow, type NumberedRowProps } from '../NumberedRow';
import styles from './SectionNumberedRows.module.css';

export interface SectionNumberedRowsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  rows?: NumberedRowProps[];
  showRow3?: boolean;
  className?: string;
}

const DEFAULT_ROWS: NumberedRowProps[] = [
  { step: 1, imageAlign: 'right' },
  { step: 2, imageAlign: 'left' },
  { step: 3, imageAlign: 'right' },
];

export function SectionNumberedRows({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  rows = DEFAULT_ROWS,
  showRow3 = true,
  className,
}: SectionNumberedRowsProps) {
  const visibleRows = showRow3 ? rows.slice(0, 3) : rows.slice(0, 2);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        {visibleRows.map((row, index) => (
          <NumberedRow key={index} {...row} />
        ))}
      </div>
    </section>
  );
}
