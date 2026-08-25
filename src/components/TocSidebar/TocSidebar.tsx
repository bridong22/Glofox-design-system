import { useState, type FormEvent } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import styles from './TocSidebar.module.css';

export interface TocItem {
  label: string;
  href?: string;
}

export interface TocSidebarProps {
  title?: string;
  items?: TocItem[];
  subscribeTitle?: string;
  subscribeSubtitle?: string;
  ctaLabel?: string;
  onSubmit?: (email: string) => void;
}

const DEFAULT_ITEMS: TocItem[] = [
  { label: 'What does it cost to open?' },
  { label: 'Reformer & equipment costs' },
  { label: 'Frequently asked questions' },
];

export function TocSidebar({
  title = 'In this guide',
  items = DEFAULT_ITEMS,
  subscribeTitle = "The Studio Owner's Playbook",
  subscribeSubtitle = 'Monthly. No spam.',
  ctaLabel = 'Subscribe',
  onSubmit,
}: TocSidebarProps) {
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(email);
  }

  return (
    <div className={styles.tocSidebar}>
      <nav className={styles.tocBox} aria-label={title}>
        <p className={styles.title}>{title}</p>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.label}>
              <a className={styles.link} href={item.href ?? '#'}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.subscribeBox}>
        <p className={styles.subscribeTitle}>{subscribeTitle}</p>
        <p className={styles.subscribeSubtitle}>{subscribeSubtitle}</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Work email"
            aria-label="Work email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <Button type="submit" size="small" className={styles.subscribeButton}>
            {ctaLabel}
          </Button>
        </form>
      </div>
    </div>
  );
}
