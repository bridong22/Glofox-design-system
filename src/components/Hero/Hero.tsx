import { useState, type FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './Hero.module.css';

export interface HeroProps {
  smallTitle?: string;
  headline?: string;
  subheadline?: string;
  onSubmit?: (email: string) => void;
}

export function Hero({
  smallTitle = 'FITNESS STUDIO AND GYM MANAGEMENT SOFTWARE',
  headline = 'All-in-one software to grow your gym or studio',
  subheadline = 'Manage bookings, payments, and members from one platform trusted by 30,000+ studios and gyms.',
  onSubmit,
}: HeroProps) {
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(email);
  }

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.smallTitle}>{smallTitle}</p>
        <h1 className={styles.headline}>{headline}</h1>
        <p className={styles.subheadline}>{subheadline}</p>
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
            Get Free Demo
          </Button>
        </form>
      </div>
    </section>
  );
}
