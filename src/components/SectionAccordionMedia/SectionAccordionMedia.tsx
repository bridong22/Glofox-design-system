import { SectionHeading } from '../SectionHeading';
import { FaqItem, type FaqItemProps } from '../FaqItem';
import { CtaGroup } from '../CtaGroup';
import styles from './SectionAccordionMedia.module.css';

export interface SectionAccordionMediaProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  imageAlign?: 'left' | 'right';
  items?: FaqItemProps[];
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

const DEFAULT_ITEMS: FaqItemProps[] = [{ defaultOpen: true }, {}, {}, {}];

export function SectionAccordionMedia({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  imageAlign = 'right',
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
}: SectionAccordionMediaProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');
  const bodyClasses = [styles.body, imageAlign === 'left' ? styles.imageLeft : undefined]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={bodyClasses}>
        <div className={styles.column}>
          <div className={styles.accordion}>
            {items.map((item, index) => (
              <FaqItem key={index} {...item} />
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
    </section>
  );
}
