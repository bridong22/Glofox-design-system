import { Button } from '../Button';
import styles from './NavBar.module.css';

export interface NavBarProps {
  theme?: 'light' | 'dark';
}

const NAV_LINKS = ['Platform', 'Business types', 'Pricing', 'Resources'];

function GlofoxLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 21c0-3 1.5-5 3.5-6.2C9.8 13.6 8.5 11.9 8.5 9.8 8.5 6.6 11 4 14.2 4S20 6.6 20 9.8c0 3.6-2.9 6.5-6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21c0-3-1.5-5-3.5-6.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NavBar({ theme = 'light' }: NavBarProps) {
  return (
    <header className={styles.navBar} data-theme={theme}>
      <div className={styles.left}>
        <span className={styles.logo}>
          <GlofoxLogo />
          <span className={styles.wordmark}>GLOFOX</span>
        </span>
        <nav className={styles.links} aria-label="Primary">
          {NAV_LINKS.map((label) => (
            <a key={label} href="#" className={styles.link}>
              {label}
            </a>
          ))}
        </nav>
      </div>
      <Button size="small">Get Free Demo</Button>
    </header>
  );
}
