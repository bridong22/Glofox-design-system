import { Icon } from '../Icon';
import styles from './RelatedTerms.module.css';

export interface RelatedTermsItem {
  label: string;
  onClick?: () => void;
}

export interface RelatedTermsProps {
  title?: string;
  terms?: RelatedTermsItem[];
}

const DEFAULT_TERMS: RelatedTermsItem[] = [
  { label: 'Class Capacity Planning' },
  { label: 'No-Show Policy' },
  { label: 'Waitlist Management' },
  { label: 'Recurring Billing' },
  { label: 'Member Retention Rate' },
];

export function RelatedTerms({ title = 'Related terms', terms = DEFAULT_TERMS }: RelatedTermsProps) {
  return (
    <div className={styles.box}>
      <p className={styles.title}>{title}</p>
      <div className={styles.chips}>
        {terms.map((term) => (
          <button key={term.label} type="button" className={styles.chip} onClick={term.onClick}>
            <span className={styles.label}>{term.label}</span>
            <Icon name="arrow-right" size={16} className={styles.icon} />
          </button>
        ))}
      </div>
    </div>
  );
}
