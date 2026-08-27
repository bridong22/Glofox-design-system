import styles from './Logo.module.css';
import { LOGO_MARKS } from './marks';

export interface LogoProps {
  brand?: string;
  className?: string;
}

// Renders a hand-recreated approximation of the named brand's real logo mark
// (see marks.tsx for how/why these are best-effort, not exact traces) when
// the brand is recognized. Falls back to a muted text-placeholder box —
// mirroring the AvatarBadge "no licensed asset in this system" convention —
// for any brand not in the lookup, so unknown/future brand names still render.
export function Logo({ brand = 'Client Logo', className }: LogoProps) {
  const Mark = LOGO_MARKS[brand.trim().toLowerCase()];
  const containerClass = Mark ? styles.logo : `${styles.logo} ${styles.placeholder}`;

  return (
    <div className={`${containerClass}${className ? ` ${className}` : ''}`}>
      {Mark ? <Mark /> : <span className={styles.brand}>{brand}</span>}
    </div>
  );
}
