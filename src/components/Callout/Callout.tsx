import { Button } from '../Button';
import styles from './Callout.module.css';

/**
 * Style=Accent: left border in `--color-brand` (Comparison Columns callouts).
 * Style=Subtle: tinted box, no border (testimonial "improvement/story" box).
 */
export interface CalloutProps {
  style?: 'accent' | 'subtle';
  showTitle?: boolean;
  title?: string;
  text?: string;
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export function Callout({
  style = 'accent',
  showTitle = true,
  title = 'Callout title',
  text = 'Short supporting text that highlights a key point next to the comparison.',
  showLink = false,
  linkLabel = 'Read the story',
  onLinkClick,
  className,
}: CalloutProps) {
  const classes = [styles.callout, style === 'subtle' ? styles.subtle : styles.accent, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {showTitle && <p className={styles.title}>{title}</p>}
      <p className={styles.text}>{text}</p>
      {showLink && (
        <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
          {linkLabel}
        </Button>
      )}
    </div>
  );
}
