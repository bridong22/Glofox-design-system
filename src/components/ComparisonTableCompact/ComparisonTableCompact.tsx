import { Icon } from '../Icon';
import styles from './ComparisonTableCompact.module.css';

export interface ComparisonTableCompactRow {
  label: string;
  description?: string;
  /** Whether the featured brand has this feature. */
  featured: boolean;
  /** One entry per competitor column, same order as `competitorNames`. */
  competitors: boolean[];
}

export interface ComparisonTableCompactProps {
  featureHeading?: string;
  /** Text wordmark for the featured column, following Footer/LpFooter's existing text-wordmark convention rather than a swappable logo asset. */
  featuredBrandName?: string;
  competitorNames?: string[];
  rows?: ComparisonTableCompactRow[];
  className?: string;
}

const DEFAULT_COMPETITOR_NAMES = ['Mindbody'];

const DEFAULT_ROWS: ComparisonTableCompactRow[] = [
  {
    label: 'Flat pricing. One low monthly price',
    featured: true,
    competitors: [false],
  },
  {
    label: 'Modern, user-friendly interface',
    featured: true,
    competitors: [false],
  },
  {
    label: 'Aligned with small business goals',
    featured: true,
    competitors: [false],
  },
  {
    label: 'Focused on only your business, not a marketplace for your competitors',
    featured: true,
    competitors: [false],
  },
];

function ValueCell({ value, highlight }: { value: boolean; highlight?: boolean }) {
  const classes = [styles.valueCell, highlight ? styles.highlight : undefined].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <Icon
        name={value ? 'check' : 'x'}
        size={24}
        className={value ? styles.checkIcon : styles.xIcon}
      />
    </div>
  );
}

export function ComparisonTableCompact({
  featureHeading = 'Why Choose Us?',
  featuredBrandName = 'Glofox',
  competitorNames = DEFAULT_COMPETITOR_NAMES,
  rows = DEFAULT_ROWS,
  className,
}: ComparisonTableCompactProps) {
  const classes = [styles.table, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.headerRow}>
        <div className={styles.featureHeadingCell}>
          <p className={styles.featureHeadingText}>{featureHeading}</p>
        </div>
        <div className={styles.headerCell}>
          <p className={styles.featuredBrandText}>{featuredBrandName}</p>
        </div>
        {competitorNames.map((name) => (
          <div key={name} className={styles.headerCell}>
            <p className={styles.competitorText}>{name}</p>
          </div>
        ))}
      </div>
      {rows.map((row, index) => (
        <div key={row.label} className={styles.row} data-stripe={index % 2 === 0 ? 'odd' : 'even'}>
          <div className={styles.featureCell}>
            <p className={styles.featureLabel}>{row.label}</p>
            {row.description && <p className={styles.featureDescription}>{row.description}</p>}
          </div>
          <ValueCell value={row.featured} highlight />
          {row.competitors.map((value, competitorIndex) => (
            <ValueCell key={competitorIndex} value={value} />
          ))}
        </div>
      ))}
    </div>
  );
}
