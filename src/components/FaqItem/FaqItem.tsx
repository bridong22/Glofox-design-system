import { useState } from 'react';
import styles from './FaqItem.module.css';

export interface FaqItemProps {
  question?: string;
  answer?: string;
  defaultOpen?: boolean;
}

export function FaqItem({
  question = 'How long does setup take?',
  answer = 'Most studios are fully onboarded within a week, with a dedicated launch specialist.',
  defaultOpen = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={styles.faqItem}>
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
