import { SectionHeading } from '../SectionHeading';
import styles from './SectionEmbed.module.css';

export interface SectionEmbedProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  width?: 'contained' | 'wide' | 'full';
  aspect?: '16:9' | '4:3' | '1:1';
  className?: string;
}

const MAX_WIDTH: Record<NonNullable<SectionEmbedProps['width']>, string | undefined> = {
  contained: '880px',
  wide: '1280px',
  full: undefined,
};

const ASPECT_RATIO: Record<NonNullable<SectionEmbedProps['aspect']>, string> = {
  '16:9': '16 / 9',
  '4:3': '4 / 3',
  '1:1': '1 / 1',
};

export function SectionEmbed({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  width = 'contained',
  aspect = '16:9',
  className,
}: SectionEmbedProps) {
  const isFull = width === 'full';
  const classes = [styles.section, isFull ? styles.full : undefined, className].filter(Boolean).join(' ');
  const bodyClasses = [styles.body, isFull ? styles.bodyFull : undefined].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={bodyClasses}>
        <div
          className={styles.embed}
          style={{ maxWidth: MAX_WIDTH[width], aspectRatio: ASPECT_RATIO[aspect] }}
        >
          <p className={styles.placeholder}>Image</p>
        </div>
      </div>
    </section>
  );
}
