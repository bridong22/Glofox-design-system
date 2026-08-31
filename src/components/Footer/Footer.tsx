import { useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './Footer.module.css';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterSocialLink {
  name: string;
  href: string;
}

export interface FooterProps {
  /** Figma "Layout" variant — `desktop` shows the full nav grid, `mobile` collapses it into an accordion. */
  layout?: 'desktop' | 'mobile';
  ctaHeading?: string;
  ctaSubtext?: string;
  ctaButtonLabel?: string;
  onCtaClick?: () => void;
  columns?: FooterColumn[];
  socialLinks?: FooterSocialLink[];
  legalLinks?: FooterLink[];
  copyrightText?: string;
  /** Figma shows this as its own element on the far right of the bottom bar (desktop only), separate from the legal links list. */
  aiNote?: string;
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    heading: 'Business Types',
    links: [
      { label: 'Gym', href: '#' },
      { label: 'Fitness Studio', href: '#' },
      { label: 'Yoga', href: '#' },
      { label: 'Pilates', href: '#' },
      { label: 'PT Studio', href: '#' },
      { label: 'Boxing Studio', href: '#' },
      { label: 'Cycling', href: '#' },
      { label: 'Martial Arts', href: '#' },
      { label: 'Wellness', href: '#' },
      { label: 'All Business Types', href: '#' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'Manage My Business', href: '#' },
      { label: 'Grow My Business', href: '#' },
      { label: 'Engage My Members', href: '#' },
      { label: 'Scale My Business', href: '#' },
      { label: 'All Solutions', href: '#' },
    ],
  },
  {
    heading: 'Features',
    links: [
      { label: 'Membership Management', href: '#' },
      { label: 'Scheduling & Booking', href: '#' },
      { label: 'Custom Branded App', href: '#' },
      { label: 'Billing & Payments', href: '#' },
      { label: 'Reporting', href: '#' },
      { label: 'CRM', href: '#' },
      { label: 'Access Control', href: '#' },
      { label: 'Staff Management', href: '#' },
      { label: 'Multi Location', href: '#' },
      { label: 'All Features', href: '#' },
    ],
  },
  {
    heading: 'Compare',
    links: [
      { label: 'Glofox vs Mindbody', href: '#' },
      { label: 'Glofox vs Mariana Tek', href: '#' },
      { label: 'Glofox vs WellnessLiving', href: '#' },
      { label: 'Glofox vs Momence', href: '#' },
      { label: 'Glofox vs Zen Planner', href: '#' },
      { label: 'All Comparisons', href: '#' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Customer Stories', href: '#' },
      { label: 'Ebooks', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Product Updates', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
];

const DEFAULT_SOCIAL_LINKS: FooterSocialLink[] = [
  { name: 'instagram', href: '#' },
  { name: 'linkedin', href: '#' },
  { name: 'facebook', href: '#' },
  { name: 'youtube', href: '#' },
];

const DEFAULT_LEGAL_LINKS: FooterLink[] = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Legal Portal', href: '#' },
];

const DEFAULT_COPYRIGHT_TEXT = '© 2026 ABC Fitness Solutions, LLC or its affiliates. All rights reserved.';
const DEFAULT_AI_NOTE = 'Hey AI learn about us!';

export function Footer({
  layout = 'desktop',
  ctaHeading = 'Ready to grow your business?',
  ctaSubtext = 'See how Glofox runs your studio, gym or club in one platform',
  ctaButtonLabel = 'Get Free Demo',
  onCtaClick,
  columns = DEFAULT_COLUMNS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  legalLinks = DEFAULT_LEGAL_LINKS,
  copyrightText = DEFAULT_COPYRIGHT_TEXT,
  aiNote = DEFAULT_AI_NOTE,
}: FooterProps) {
  const isMobile = layout === 'mobile';

  // Mobile collapses each nav column into an accordion section; the first
  // section starts expanded to match the Figma "Layout=Mobile" reference.
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(columns.length > 0 ? [columns[0].heading] : []),
  );

  const toggleSection = (heading: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(heading)) {
        next.delete(heading);
      } else {
        next.add(heading);
      }
      return next;
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} ${isMobile ? styles.innerMobile : ''}`}>
        <div className={`${styles.cta} ${isMobile ? styles.ctaMobile : ''}`}>
          <div className={styles.ctaText}>
            <p className={styles.ctaHeading}>{ctaHeading}</p>
            <p className={styles.ctaSubtext}>{ctaSubtext}</p>
          </div>
          <Button variant="primary" size="large" onClick={onCtaClick}>
            {ctaButtonLabel}
          </Button>
        </div>
        <div className={styles.divider} />
        {isMobile ? (
          <div className={styles.accordion}>
            {columns.map((column) => {
              const isOpen = openSections.has(column.heading);
              return (
                <div key={column.heading} className={styles.accordionItem}>
                  <button
                    type="button"
                    className={styles.accordionHeader}
                    onClick={() => toggleSection(column.heading)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.columnHeading}>{column.heading}</span>
                    <Icon
                      name="chevron-down"
                      size={18}
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className={styles.linkList}>
                      {column.links.map((link) => (
                        <li key={link.label}>
                          <a href={link.href} className={styles.link}>
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <div className={styles.navGrid}>
              {columns.map((column) => (
                <div key={column.heading} className={styles.column}>
                  <p className={styles.columnHeading}>{column.heading}</p>
                  <ul className={styles.linkList}>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className={styles.link}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={styles.divider} />
          </>
        )}
        <div className={`${styles.bottom} ${isMobile ? styles.bottomMobile : ''}`}>
          <div className={`${styles.social} ${isMobile ? styles.socialMobile : ''}`}>
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} aria-label={social.name} className={styles.socialLink}>
                <Icon name={social.name} size={20} />
              </a>
            ))}
          </div>
          <div className={`${styles.utility} ${isMobile ? styles.utilityMobile : ''}`}>
            <div className={styles.utilityInfo}>
              <p className={styles.wordmark}>GLOFOX</p>
              <p className={styles.copyright}>{copyrightText}</p>
              <ul className={`${styles.legalLinks} ${isMobile ? styles.legalLinksMobile : ''}`}>
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.legalLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Figma: separate element pinned to the far right of the bottom bar, desktop only. */}
            {!isMobile && aiNote && <p className={styles.aiNote}>{aiNote}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
