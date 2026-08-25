import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './NavBar.module.css';

export interface NavBarProps {
  /** Figma "Layout" property. */
  layout?: 'desktop' | 'mobile';
  /**
   * Figma "Theme" property. Only meaningful when `layout="desktop"` —
   * Figma has no Mobile+Dark combination, so this is ignored on mobile.
   */
  theme?: 'light' | 'dark';
  /**
   * Controlled open state for the mobile menu drawer (Figma "Menu" property).
   * Omit to let NavBar manage it internally, seeded from `defaultMenuOpen`.
   */
  menuOpen?: boolean;
  /** Initial open state when `menuOpen` is not provided. */
  defaultMenuOpen?: boolean;
  /** Fired whenever the mobile menu is toggled, controlled or not. */
  onMenuOpenChange?: (open: boolean) => void;
  ctaLabel?: string;
  onCtaClick?: () => void;
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

export function NavBar({
  layout = 'desktop',
  theme = 'light',
  menuOpen,
  defaultMenuOpen = false,
  onMenuOpenChange,
  ctaLabel = 'Get Free Demo',
  onCtaClick,
}: NavBarProps) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(defaultMenuOpen);
  const isMenuOpen = menuOpen ?? internalMenuOpen;

  function toggleMenu() {
    const next = !isMenuOpen;
    if (menuOpen === undefined) {
      setInternalMenuOpen(next);
    }
    onMenuOpenChange?.(next);
  }

  // "Scroll" (Default/Scrolled) is an interaction state, not a variant a
  // consumer sets — it mirrors the live site swapping the fixed nav to a
  // solid background once the page scrolls past the hero, so it's derived
  // from a scroll listener instead of a prop.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (layout !== 'desktop') {
      return;
    }
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [layout]);

  const isDesktop = layout === 'desktop';
  const isScrolled = isDesktop && scrolled;

  return (
    <header
      className={styles.navBar}
      data-layout={layout}
      data-theme={theme}
      data-scrolled={isScrolled ? '' : undefined}
    >
      <div className={styles.inner}>
        {isDesktop ? (
          <>
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
            <Button size="small" onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </>
        ) : (
          <>
            <span className={styles.logo}>
              <GlofoxLogo />
              <span className={styles.wordmark}>GLOFOX</span>
            </span>
            <button
              type="button"
              className={styles.menuToggle}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              <Icon name={isMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </>
        )}
      </div>

      {!isDesktop && isMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileLinks} aria-label="Primary">
            {NAV_LINKS.map((label) => (
              <a key={label} href="#" className={styles.mobileLink}>
                {label}
              </a>
            ))}
          </nav>
          <div className={styles.mobileCta}>
            <Button size="small" className={styles.mobileCtaButton} onClick={onCtaClick}>
              {ctaLabel}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
