import { Logo } from '../Logo';
import styles from './LogoBar.module.css';

export interface LogoBarProps {
  brands?: string[];
  className?: string;
}

const DEFAULT_BRANDS = [
  'Jazzercise',
  'Rumble',
  'F45',
  'AKT',
  'StretchLab',
  'Spartans',
  'Club Pilates',
  'Snap Fitness 24/7',
];

// CONFIRMED live layout (homepage trust bar, below the hero) — 8 client
// logos, uniform height, evenly spaced (48px gap). Brand NAMES are real
// (matching what ships on glofox.com); the mark artwork itself is a
// placeholder — see the Logo atom's own note.
export function LogoBar({ brands = DEFAULT_BRANDS, className }: LogoBarProps) {
  return (
    <div className={`${styles.logoBar}${className ? ` ${className}` : ''}`}>
      {brands.map((brand) => (
        <Logo key={brand} brand={brand} />
      ))}
    </div>
  );
}
