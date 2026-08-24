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
  ctaHeading?: string;
  ctaSubtext?: string;
  ctaButtonLabel?: string;
  onCtaClick?: () => void;
  columns?: FooterColumn[];
  socialLinks?: FooterSocialLink[];
  legalLinks?: FooterLink[];
  copyrightText?: string;
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
  { label: 'Hey AI learn about us!', href: '#' },
];

const DEFAULT_COPYRIGHT_TEXT = '© 2026 ABC Fitness Solutions, LLC or its affiliates. All rights reserved.';

export function Footer({
  ctaHeading = 'Ready to grow your business?',
  ctaSubtext = 'See how Glofox runs your studio, gym or club in one platform',
  ctaButtonLabel = 'Get Free Demo',
  onCtaClick,
  columns = DEFAULT_COLUMNS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  legalLinks = DEFAULT_LEGAL_LINKS,
  copyrightText = DEFAULT_COPYRIGHT_TEXT,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <p className={styles.ctaHeading}>{ctaHeading}</p>
          <p className={styles.ctaSubtext}>{ctaSubtext}</p>
        </div>
        <Button variant="primary" size="large" onClick={onCtaClick}>
          {ctaButtonLabel}
        </Button>
      </div>
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
      <div className={styles.bottom}>
        <div className={styles.social}>
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} aria-label={social.name} className={styles.socialLink}>
              <Icon name={social.name} size={20} />
            </a>
          ))}
        </div>
        <div className={styles.utility}>
          <p className={styles.wordmark}>GLOFOX</p>
          <p className={styles.copyright}>{copyrightText}</p>
          <ul className={styles.legalLinks}>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
