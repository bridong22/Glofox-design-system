import { Button } from '../Button';
import styles from './CtaGroup.module.css';

export interface CtaGroupProps {
  align?: 'left' | 'center';
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  showSecondary?: boolean;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

export function CtaGroup({
  align = 'center',
  primaryLabel = 'Get Free Demo',
  onPrimaryClick,
  showSecondary = true,
  secondaryLabel = 'Get Free Demo',
  onSecondaryClick,
  className,
}: CtaGroupProps) {
  const classes = [styles.group, align === 'left' ? styles.left : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <Button variant="primary" size="medium" onClick={onPrimaryClick}>
        {primaryLabel}
      </Button>
      {showSecondary && (
        <Button variant="outline" size="medium" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      )}
    </div>
  );
}
