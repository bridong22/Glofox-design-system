import { ChecklistItem } from '../ChecklistItem';
import { CtaGroup } from '../CtaGroup';
import styles from './NumberedRow.module.css';

/**
 * Single row of Section/Numbered Rows: number badge, overline, heading,
 * description, 2-4 item checklist, CTA group, and an image that alternates
 * left/right per row. Distinct from `NumberedStep` (chrome-less icon list
 * item) — this is a full media+copy row used for sequential platform steps.
 */
export interface NumberedRowProps {
  step?: number;
  overline?: string;
  heading?: string;
  description?: string;
  items?: string[];
  showCta?: boolean;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  showSecondaryCta?: boolean;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  /** Side the image sits on. Right (default) matches the first/third row of
   * Section/Numbered Rows (content left, image right); Left matches the
   * alternating middle row. */
  imageAlign?: 'left' | 'right';
  className?: string;
}

const DEFAULT_ITEMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

export function NumberedRow({
  step = 1,
  overline = 'Overline',
  heading = 'Step heading goes here',
  description = 'Supporting description that explains the benefit in one or two sentences for the reader.',
  items = DEFAULT_ITEMS,
  showCta = true,
  primaryLabel,
  onPrimaryClick,
  showSecondaryCta = true,
  secondaryLabel,
  onSecondaryClick,
  imageUrl,
  imageAlt = '',
  imageAlign = 'right',
  className,
}: NumberedRowProps) {
  const classes = [styles.row, imageAlign === 'left' ? styles.imageLeft : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.number}>{step}</span>
        </div>
        <p className={styles.overline}>{overline}</p>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.checklist}>
          {items.map((item, index) => (
            <ChecklistItem key={index} label={item} />
          ))}
        </div>
        {showCta && (
          <CtaGroup
            align="left"
            primaryLabel={primaryLabel}
            onPrimaryClick={onPrimaryClick}
            showSecondary={showSecondaryCta}
            secondaryLabel={secondaryLabel}
            onSecondaryClick={onSecondaryClick}
          />
        )}
      </div>
      <div className={styles.media}>
        {imageUrl ? (
          <img className={styles.image} src={imageUrl} alt={imageAlt} />
        ) : (
          <p className={styles.mediaPlaceholder}>Image</p>
        )}
      </div>
    </div>
  );
}
