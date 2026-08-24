import styles from './LinearProgressTrack.module.css';

export interface LinearProgressTrackProps {
  value?: number;
}

export function LinearProgressTrack({ value = 30 }: LinearProgressTrackProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className={styles.fill} style={{ width: `${clamped}%` }} />
    </div>
  );
}
