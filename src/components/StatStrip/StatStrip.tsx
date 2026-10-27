import styles from './StatStrip.module.css';

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  showPrefix?: boolean;
  description?: string;
  showDescription?: boolean;
}

export interface StatStripProps {
  stats?: Stat[];
}

const DEFAULT_STATS: Stat[] = [
  { value: '30k+', label: 'Studios & gyms' },
  { value: '4.5/5', label: 'Capterra rating' },
  { value: '4.4/5', label: 'G2 rating' },
];

export function StatStrip({ stats = DEFAULT_STATS }: StatStripProps) {
  return (
    <div className={styles.statStrip}>
      {stats.map((stat) => {
        const showPrefix = stat.showPrefix ?? Boolean(stat.prefix);
        const showDescription = stat.showDescription ?? Boolean(stat.description);
        return (
          <div className={styles.stat} key={`${stat.value}-${stat.label}`}>
            {showPrefix && stat.prefix && <p className={styles.prefix}>{stat.prefix}</p>}
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
            {showDescription && stat.description && (
              <p className={styles.description}>{stat.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
