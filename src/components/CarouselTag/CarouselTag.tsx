import styles from './CarouselTag.module.css';

export interface CarouselTagProps {
  score?: string;
  description?: string;
}

export function CarouselTag({ score = '100%', description = 'Improvement description' }: CarouselTagProps) {
  return (
    <div className={styles.carouselTag}>
      <div className={styles.score}>
        <p className={styles.scoreValue}>{score}</p>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
