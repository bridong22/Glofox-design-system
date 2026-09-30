import styles from './LetterGroupHeader.module.css';

export interface LetterGroupHeaderProps {
  letter?: string;
}

export function LetterGroupHeader({ letter = 'A' }: LetterGroupHeaderProps) {
  return (
    <div className={styles.header}>
      <p className={styles.letter}>{letter}</p>
      <div className={styles.divider} />
    </div>
  );
}
