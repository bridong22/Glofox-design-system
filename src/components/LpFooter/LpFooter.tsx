import styles from './LpFooter.module.css';

export interface LpFooterProps {
  /** Figma "Breakpoint" property. Desktop: logo, divider and legal line in one row. Mobile: stacked, no divider. */
  breakpoint?: 'desktop' | 'mobile';
  copyrightText?: string;
}

export function LpFooter({
  breakpoint = 'desktop',
  copyrightText = '© 2026 ABC Fitness Solutions, LLC or its affiliates. All rights reserved.',
}: LpFooterProps) {
  const isMobile = breakpoint === 'mobile';
  const className = [styles.lpFooter, isMobile ? styles.mobile : undefined].filter(Boolean).join(' ');

  return (
    <footer className={className}>
      <div className={styles.container}>
        <p className={styles.wordmark}>GLOFOX</p>
        {!isMobile && <div className={styles.divider} />}
        <p className={styles.legal}>{copyrightText}</p>
      </div>
    </footer>
  );
}
