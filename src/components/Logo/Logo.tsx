import styles from './Logo.module.css';

export interface LogoProps {
  brand?: string;
  className?: string;
}

// PLACEHOLDER atom — mirrors the AvatarBadge "no licensed asset in this
// system" convention. Real client logo artwork (Rumble, F45, AKT,
// StretchLab, Spartans, Jazzercise, Club Pilates, Snap Fitness 24/7) is
// trademarked and intentionally not reproduced here; this renders a muted
// placeholder box with the brand name as text instead. Swap in the
// licensed logo asset per brand when one is available.
export function Logo({ brand = 'Client Logo', className }: LogoProps) {
  return (
    <div className={`${styles.logo}${className ? ` ${className}` : ''}`}>
      <span className={styles.brand}>{brand}</span>
    </div>
  );
}
