import { Button } from '../Button';
import styles from './Hero.module.css';

export interface HeroProps {
  background?: 'solid' | 'image' | 'video';
  backgroundSrc?: string;
  smallTitle?: string;
  headline?: string;
  subheadline?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function Hero({
  background = 'solid',
  backgroundSrc,
  smallTitle = 'FITNESS STUDIO AND GYM MANAGEMENT SOFTWARE',
  headline = 'All-in-one software to grow your gym or studio',
  subheadline = 'Manage bookings, payments, and members from one platform trusted by 30,000+ studios and gyms.',
  ctaLabel = 'Get Free Demo',
  onCtaClick,
}: HeroProps) {
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
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subheadline}>{subheadline}</p>
        <Button type="button" size="medium" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
