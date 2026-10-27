import styles from './ScrollIndicator.module.css';

export interface ScrollIndicatorProps {
  /** Total number of slides/segments. */
  count?: number;
  /** Active segment, 1-indexed. */
  active?: number;
  /** Figma "Style" variant. */
  style?: 'dash' | 'dot';
  /** Figma "Show count label" option — renders "active / count" text. */
  showCountLabel?: boolean;
  onSelect?: (index: number) => void;
  className?: string;
}

export function ScrollIndicator({
  count = 3,
  active = 1,
  style = 'dash',
  showCountLabel = false,
  onSelect,
  className,
}: ScrollIndicatorProps) {
  const segments = Array.from({ length: count }, (_, index) => index + 1);
  const classes = [styles.scrollIndicator, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.track} role="tablist">
        {segments.map((index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Go to slide ${index}`}
            className={styles.segment}
            onClick={() => onSelect?.(index)}
          >
            <span className={`${styles[style]} ${index === active ? styles.active : ''}`} />
          </button>
        ))}
      </div>
      {showCountLabel && (
        <p className={styles.countLabel}>
          {active} / {count}
        </p>
      )}
    </div>
  );
}
