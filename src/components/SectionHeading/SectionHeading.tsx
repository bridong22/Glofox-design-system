import styles from './SectionHeading.module.css';

export interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  size?: 'medium' | 'small' | 'large';
}

const alignClasses = {
  center: styles.center,
  left: styles.left,
  right: styles.right,
};

const sizeClasses = {
  medium: '',
  small: styles.sizeSmall,
  large: styles.sizeLarge,
};

export function SectionHeading({
  eyebrow = 'PLATFORM',
  title = 'Run your entire fitness business',
  subtitle = 'Everything you need to manage, grow, and retain your members.',
  align = 'center',
  size = 'medium',
}: SectionHeadingProps) {
  const className = [styles.sectionHeading, alignClasses[align], sizeClasses[size]]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={className}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
