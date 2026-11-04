import { ChecklistItem } from '../ChecklistItem';
import { CtaGroup } from '../CtaGroup';
import styles from './MediaTextRow.module.css';

/**
 * Shared "Media + Text" row used by Section/50-50 Text and Image and
 * Section/Image and Items List: overline + heading + description + optional
 * checklist + CTA group, paired with an image that sits on either side.
 * Unlike `NumberedRow` there's no number badge — a distinct shape, so this
 * is a separate molecule rather than a NumberedRow variant.
 */
export interface MediaTextRowProps {
  align?: 'left' | 'center';
  imageAlign?: 'left' | 'right';
  overline?: string;
  heading?: string;
  description?: string;
  showList?: boolean;
  items?: string[];
  showCta?: boolean;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  showSecondaryCta?: boolean;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

const DEFAULT_ITEMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

export function MediaTextRow({
  align = 'left',
  imageAlign = 'right',
  overline = 'Overline',
  heading = 'Section heading goes here',
  description = 'Supporting description that explains the benefit in one or two sentences for the reader.',
  showList = false,
  items = DEFAULT_ITEMS,
  showCta = true,
  primaryLabel,
  onPrimaryClick,
  showSecondaryCta = true,
  secondaryLabel,
  onSecondaryClick,
  imageUrl,
  imageAlt = '',
  className,
}: MediaTextRowProps) {
  const classes = [styles.row, imageAlign === 'left' ? styles.imageLeft : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <div className={[styles.content, align === 'center' ? styles.center : undefined].filter(Boolean).join(' ')}>
        <p className={styles.overline}>{overline}</p>
        <p className={styles.heading}>{heading}</p>
        <p className={styles.description}>{description}</p>
        {showList && (
          <div className={styles.checklist}>
            {items.map((item, index) => (
              <ChecklistItem key={index} label={item} />
            ))}
          </div>
        )}
        {showCta && (
          <CtaGroup
            align={align}
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
