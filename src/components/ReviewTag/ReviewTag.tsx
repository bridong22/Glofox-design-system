import type { HTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './ReviewTag.module.css';

export interface ReviewTagProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Star rating out of 5, e.g. 4.5 — drives the star fill and the displayed number. */
  rating?: number;
  /** Total number of reviews behind the rating. */
  reviewCount?: number;
  /** 'dark' sits on a dark/hero surface (translucent white pill, white text). 'light' sits on a light surface. Figma default: 'dark'. */
  mode?: 'dark' | 'light';
  className?: string;
}

const STAR_COUNT = 5;

export function ReviewTag({ rating = 4.5, reviewCount = 465, mode = 'dark', className, ...rest }: ReviewTagProps) {
  const classes = [styles.tag, className].filter(Boolean).join(' ');
  const clampedRating = Math.min(STAR_COUNT, Math.max(0, rating));
  const fullStars = Math.floor(clampedRating);
  const fraction = clampedRating - fullStars;

  return (
    <div className={classes} data-mode={mode} {...rest}>
      <div className={styles.stars} role="img" aria-label={`Rated ${clampedRating} out of ${STAR_COUNT}`}>
        {Array.from({ length: STAR_COUNT }, (_, index) => {
          const isFull = index < fullStars;
          const isPartial = !isFull && index === fullStars && fraction > 0;

          if (isFull) {
            return <Icon key={index} name="star" size={18} className={styles.starFull} />;
          }

          if (isPartial) {
            return (
              <span key={index} className={styles.starSlot}>
                <Icon name="star" size={18} className={styles.starMuted} />
                <span className={styles.starFillClip} style={{ width: `${fraction * 100}%` }}>
                  <Icon name="star" size={18} className={styles.starFull} />
                </span>
              </span>
            );
          }

          return <Icon key={index} name="star" size={18} className={styles.starMuted} />;
        })}
      </div>
      <div className={styles.meta}>
        <p className={styles.value}>{clampedRating}</p>
        <p className={styles.count}>| {reviewCount} reviews</p>
      </div>
    </div>
  );
}
