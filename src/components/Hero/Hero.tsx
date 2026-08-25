import { useState, type FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './Hero.module.css';

export interface HeroProps {
  background?: 'solid' | 'image' | 'video';
  backgroundSrc?: string;
  content?: 'with-form' | 'cta-only';
  smallTitle?: string;
  headline?: string;
  subheadline?: string;
  onSubmit?: (email: string) => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function Hero({
  background = 'solid',
  backgroundSrc,
  content = 'with-form',
  smallTitle = 'FITNESS STUDIO AND GYM MANAGEMENT SOFTWARE',
  headline = 'All-in-one software to grow your gym or studio',
  subheadline = 'Manage bookings, payments, and members from one platform trusted by 30,000+ studios and gyms.',
  onSubmit,
  ctaLabel = 'Get Free Demo',
  onCtaClick,
}: HeroProps) {
  const [email, setEmail] = useState('');
  const isMedia = background === 'image' || background === 'video';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(email);
  }

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
        {content === 'with-form' ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Work email"
              aria-label="Work email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Button type="submit" size="medium">
              {ctaLabel}
            </Button>
          </form>
        ) : (
          <Button type="button" size="medium" className={styles.ctaOnlyButton} onClick={onCtaClick}>
            {ctaLabel}
          </Button>
        )}
      </div>
    </section>
  );
}
