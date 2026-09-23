import { AvatarBadge } from '../AvatarBadge';
import { Icon } from '../Icon';
import styles from './TestimonialCard.module.css';

const STAR_COUNT = 5;

export interface TestimonialCardProps {
  verifiedLabel?: string;
  quote?: string;
  authorAvatarUrl?: string;
  authorInitials?: string;
  authorName?: string;
  authorRole?: string;
}

export function TestimonialCard({
  verifiedLabel = 'Verified Owner',
  quote = '"Glofox helped us cut admin time in half and grow membership 30% year over year. The custom quote gave us clear expectations from day one."',
  authorAvatarUrl,
  authorInitials,
  authorName = 'Russ Harrison',
  authorRole = 'Owner, Spartans Boxing Club',
}: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.stars} role="img" aria-label={`Rated ${STAR_COUNT} out of ${STAR_COUNT}`}>
          {Array.from({ length: STAR_COUNT }, (_, index) => (
            <Icon key={index} name="star-fill" size={14} className={styles.star} />
          ))}
        </div>
        <span className={styles.verified}>{verifiedLabel}</span>
      </div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.author}>
        <AvatarBadge size={28} src={authorAvatarUrl} initials={authorInitials} type="initials" />
        <div className={styles.authorInfo}>
          <p className={styles.authorName}>{authorName}</p>
          <p className={styles.authorRole}>{authorRole}</p>
        </div>
      </div>
    </div>
  );
}
