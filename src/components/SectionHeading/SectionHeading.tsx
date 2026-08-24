import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  eyebrow = 'PLATFORM',
  title = 'Run your entire fitness business',
  subtitle = 'Everything you need to manage, grow, and retain your members.',
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'left' ? styles.left : styles.center;

  return (
    <div className={`${styles.sectionHeading} ${alignClass}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
