import { useState } from 'react';
import styles from './FaqItem.module.css';

export interface FaqItemProps {
  question?: string;
  answer?: string;
  defaultOpen?: boolean;
  /**
   * Divider (default): plain row with a bottom hairline, no card chrome.
   * Outline/Solid (added 2026-11-04, Section/FAQ Style prop): self-contained
   * bordered or filled card per item instead of a shared divider list.
   */
  style?: 'divider' | 'outline' | 'solid';
  className?: string;
}

export function FaqItem({
  question = 'How long does setup take?',
  answer = 'Most studios are fully onboarded within a week, with a dedicated launch specialist.',
  defaultOpen = false,
  style = 'divider',
  className,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const classes = [
    styles.faqItem,
    style === 'outline' ? styles.outline : style === 'solid' ? styles.solid : undefined,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <button
        type="button"
        className={styles.questionRow}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <span className={styles.toggleGlyph} aria-hidden="true">
          {isOpen ? '–' : '+'}
        </span>
      </button>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}
