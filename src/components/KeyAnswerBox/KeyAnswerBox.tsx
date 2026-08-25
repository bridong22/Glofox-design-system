import { Icon } from '../Icon';
import styles from './KeyAnswerBox.module.css';

export interface KeyAnswerBoxProps {
  label?: string;
  lead?: string;
  body?: string;
}

export function KeyAnswerBox({
  label = 'Ai Overview',
  lead = 'The short answer:',
  body = 'opening a boutique Pilates studio typically costs between $85,000 and $220,000, driven mostly by reformer equipment and buildout. Most owners recoup their startup costs within 18–24 months at a 65%+ member retention rate.',
}: KeyAnswerBoxProps) {
  return (
    <div className={styles.keyAnswerBox}>
      <div className={styles.header}>
        <Icon name="sparkles" size={16} className={styles.icon} />
        <p className={styles.label}>{label}</p>
      </div>
      <p className={styles.body}>
        <strong className={styles.lead}>{lead} </strong>
        {body}
      </p>
    </div>
  );
}
