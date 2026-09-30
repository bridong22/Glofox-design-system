import styles from './TermEntry.module.css';

export interface TermEntryProps {
  term?: string;
  definition?: string;
}

export function TermEntry({
  term = 'Term Name',
  definition = 'One to two sentence placeholder definition of this glossary term, written in plain language for a first-time reader.',
}: TermEntryProps) {
  return (
    <div className={styles.entry}>
      <p className={styles.term}>{term}</p>
      <p className={styles.definition}>{definition}</p>
    </div>
  );
}
