import { useState, type FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './NewsletterCapture.module.css';

export interface NewsletterCaptureProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onSubmit?: (email: string) => void;
}

export function NewsletterCapture({
  title = "The Studio Owner's Playbook",
  subtitle = 'Monthly. Straight from the Glofox team.',
  ctaLabel = 'Subscribe',
  onSubmit,
}: NewsletterCaptureProps) {
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(email);
  }

  return (
    <section className={styles.newsletterCapture}>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
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
    </section>
  );
}
