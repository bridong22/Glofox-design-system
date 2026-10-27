import { useState, type FormEvent } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { ChecklistItem } from '../ChecklistItem';
import { Icon } from '../Icon';
import { Input } from '../Input';
import styles from './Hero.module.css';

export interface HeroProps {
  background?: 'solid' | 'image' | 'video';
  backgroundSrc?: string;
  /**
   * Figma "Content" property. The two-column variants only exist for
   * background="solid". 2026-09-12: Figma split the single "TwoColumn"
   * option into "TwoColumn - Left" and "TwoColumn - Right" (image position);
   * the original "TwoColumn" master was renamed to "TwoColumn - Right" (image
   * placeholder on the right, unchanged) and a new "TwoColumn - Left" sibling
   * (image on the left) was added alongside it — same content/spacing,
   * mirrored image position.
   *
   * 'cta-only' is a misnomer carried over from Figma's own component
   * property (its description admits the value should have been renamed to
   * "WithForm" but the enum itself was never updated) — all three
   * background variants of this content mode actually render an inline
   * email-capture form (Label + "Work email" field + CTA button), not a
   * bare button. Kept the Figma property name for Code Connect parity.
   */
  content?: 'cta-only' | 'two-column-left' | 'two-column-right';
  smallTitle?: string;
  headline?: string;
  subheadline?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  onEmailSubmit?: (email: string) => void;
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
  emailLabel = 'Label',
  emailPlaceholder = 'Work email',
  ctaLabel,
  onCtaClick,
  onEmailSubmit,
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
  const [email, setEmail] = useState('');

  function handleEmailSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onEmailSubmit?.(email);
  }

  if (content === 'two-column-left' || content === 'two-column-right') {
    return (
      <section
        className={styles.heroTwoColumn}
        data-image-position={content === 'two-column-left' ? 'left' : 'right'}
      >
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
        <h1 className={isMedia ? styles.headlineDisplay : styles.headline}>
          {headline ?? 'All-in-one software to grow your gym or studio'}
        </h1>
        <p className={styles.subheadline}>
          {subheadline ??
            'Manage bookings, payments, and members from one platform trusted by 30,000+ studios and gyms.'}
        </p>
        <form className={styles.form} onSubmit={handleEmailSubmit}>
          <Input
            showTitle
            title={emailLabel}
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" size="medium" onClick={onCtaClick}>
            {ctaLabel ?? 'Get Free Demo'}
          </Button>
        </form>
      </div>
    </section>
  );
}
