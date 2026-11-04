import { SectionHeading } from '../SectionHeading';
import { MediaTextRow, type MediaTextRowProps } from '../MediaTextRow';
import styles from './SectionTextAndImage.module.css';

export interface SectionTextAndImageProps {
  align?: 'left' | 'center';
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  rows?: MediaTextRowProps[];
  showRow3?: boolean;
  className?: string;
}

const DEFAULT_ROWS: MediaTextRowProps[] = [
  { imageAlign: 'right' },
  { imageAlign: 'left' },
  { imageAlign: 'right' },
];

export function SectionTextAndImage({
  align = 'left',
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  rows = DEFAULT_ROWS,
  showRow3 = false,
  className,
}: SectionTextAndImageProps) {
  const visibleRows = (showRow3 ? rows.slice(0, 3) : rows.slice(0, 2)).map((row) => ({ align, ...row }));
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        {visibleRows.map((row, index) => (
          <MediaTextRow key={index} {...row} />
        ))}
      </div>
    </section>
  );
}
