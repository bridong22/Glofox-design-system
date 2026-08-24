import styles from './StatStrip.module.css';

export interface Stat {
  value: string;
  label: string;
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
      {stats.map((stat) => (
        <div className={styles.stat} key={`${stat.value}-${stat.label}`}>
          <p className={styles.value}>{stat.value}</p>
          <p className={styles.label}>{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
