import { Badge } from '../Badge';
import { Button } from '../Button';
import { ChecklistItem } from '../ChecklistItem';
import { Icon } from '../Icon';
import styles from './Hero.module.css';

export interface HeroProps {
  background?: 'solid' | 'image' | 'video';
  backgroundSrc?: string;
  /** Figma "Content" property. "two-column" only exists for background="solid". */
  content?: 'cta-only' | 'two-column';
  smallTitle?: string;
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** two-column content only */
  eyebrowCategory?: string;
  eyebrowSubcategory?: string;
  checklist?: string[];
  ctaHelperText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function Hero({
  background = 'solid',
  backgroundSrc,
  content = 'cta-only',
  smallTitle = 'FITNESS STUDIO AND GYM MANAGEMENT SOFTWARE',
  headline,
  subheadline,
  ctaLabel,
  onCtaClick,
  eyebrowCategory = 'BUSINESS TYPES',
  eyebrowSubcategory = 'GYM',
  checklist = [
    'Automate billing, renewals, and payment recovery',
    'Barcode check-in, kiosk, and door access',
    'Retention dashboards and churn alerts',
  ],
  ctaHelperText = 'Free walkthrough. No credit card required.',
  imageUrl,
  imageAlt = '',
}: HeroProps) {
  if (content === 'two-column') {
    return (
      <section className={styles.heroTwoColumn}>
        <div className={styles.twoColumnContent}>
          <Badge size="small">
            <span className={styles.eyebrowCategory}>{eyebrowCategory}</span>
            <span className={styles.eyebrowDivider}>|</span>
            <span className={styles.eyebrowSubcategory}>{eyebrowSubcategory}</span>
          </Badge>
          <h1 className={styles.twoColumnHeadline}>{headline ?? 'Gym Management Software'}</h1>
          <p className={styles.twoColumnSubheadline}>
            {subheadline ??
              'Built for gym owners who want more members and less time lost to admin.'}
          </p>
          <div className={styles.checklist}>
            {checklist.map((item) => (
              <ChecklistItem key={item} label={item} />
            ))}
          </div>
          <div className={styles.twoColumnCta}>
            <Button type="button" size="large" onClick={onCtaClick}>
              {ctaLabel ?? 'Get a Free Demo'}
            </Button>
            <p className={styles.ctaHelperText}>{ctaHelperText}</p>
          </div>
        </div>
        <div className={styles.imagePlaceholderBox}>
          {imageUrl ? (
            <img className={styles.twoColumnImage} src={imageUrl} alt={imageAlt} />
          ) : (
            <>
              <Icon name="image" size={32} className={styles.imagePlaceholderIcon} />
              <p className={styles.imagePlaceholderText}>Image placeholder</p>
            </>
          )}
        </div>
      </section>
    );
  }

  const isMedia = background === 'image' || background === 'video';

  return (
    <section className={styles.hero} data-background={background}>
      {background === 'image' &&
        (backgroundSrc ? (
          <img className={styles.backgroundMedia} src={backgroundSrc} alt="" aria-hidden="true" />
        ) : (
          <div className={styles.backgroundPlaceholder} aria-hidden="true" />
        ))}
      {background === 'video' &&
        (backgroundSrc ? (
          <video
            className={styles.backgroundMedia}
            src={backgroundSrc}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        ) : (
          <div className={styles.backgroundPlaceholder} aria-hidden="true" />
        ))}
      {isMedia && <div className={styles.overlay} aria-hidden="true" />}
      <div className={styles.inner}>
        <p className={styles.smallTitle}>{smallTitle}</p>
        <h1 className={styles.headline}>
          {headline ?? 'All-in-one software to grow your gym or studio'}
        </h1>
        <p className={styles.subheadline}>
          {subheadline ??
            'Manage bookings, payments, and members from one platform trusted by 30,000+ studios and gyms.'}
        </p>
        <Button type="button" size="medium" onClick={onCtaClick}>
          {ctaLabel ?? 'Get Free Demo'}
        </Button>
      </div>
    </section>
  );
}
