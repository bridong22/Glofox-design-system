import styles from './MostPopularBanner.module.css';

/**
 * Ribbon call-out that overlaps a card's top edge — position it at the top
 * of a Pricing Card (or any single-card emphasis). Editable label, not
 * limited to "Most Popular" (e.g. "Best Value").
 */
export interface MostPopularBannerProps {
  label?: string;
}

export function MostPopularBanner({ label = 'MOST POPULAR' }: MostPopularBannerProps) {
  return (
    <div className={styles.banner}>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
