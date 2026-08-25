import { Button } from '../Button';
import styles from './ComparisonCard.module.css';

export interface ComparisonCardProps {
  /** Figma variant property `Type`. Large is the brand/teal info card, Small is the compact neutral card. */
  type?: 'large' | 'small';
  /** Headline (Large) or single-line body text (Small). */
  title?: string;
  /** Supporting copy, only rendered when `type` is `'large'`. */
  description?: string;
  /** Label for the "Read More" CTA, only rendered when `type` is `'small'`. */
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

const LARGE_DEFAULT_TITLE = 'ABC Glofox';
const LARGE_DEFAULT_DESCRIPTION =
  'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.';
const SMALL_DEFAULT_TITLE = 'Best Fitness Studio Software for 2026';
const SMALL_DEFAULT_LINK_LABEL = 'Read More';

export function ComparisonCard({
  type = 'large',
  title,
  description = LARGE_DEFAULT_DESCRIPTION,
  linkLabel = SMALL_DEFAULT_LINK_LABEL,
  onLinkClick,
  className,
}: ComparisonCardProps) {
  const isSmall = type === 'small';
  const resolvedTitle = title ?? (isSmall ? SMALL_DEFAULT_TITLE : LARGE_DEFAULT_TITLE);
  const classes = [styles.card, isSmall ? styles.small : styles.large, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <p className={styles.title}>{resolvedTitle}</p>
      {!isSmall && <p className={styles.description}>{description}</p>}
      {isSmall && (
        <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
          {linkLabel}
        </Button>
      )}
    </div>
  );
}
