import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { LinkArrow } from '../LinkArrow';
import { NavLinkTrigger } from '../NavLinkTrigger';
import { NavMenuItem } from '../NavMenuItem';
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

interface NavMenuItemData {
  title: string;
  description?: string;
  icon: string;
}

interface NavItemConfig {
  label: string;
  key: string;
  /** Pricing has no trigger/dropdown variant — it stays a plain text link. */
  hasDropdown: boolean;
}

const NAV_ITEMS: NavItemConfig[] = [
  { label: 'Platform', key: 'platform', hasDropdown: true },
  { label: 'Business types', key: 'business-types', hasDropdown: true },
  { label: 'Pricing', key: 'pricing', hasDropdown: false },
  { label: 'Resources', key: 'resources', hasDropdown: true },
];

// Real content pulled from the "Business Types Dropdown" Figma node
// (460:2515) — label-only rows (Show description=false), 2 columns.
const BUSINESS_TYPES_COL1: NavMenuItemData[] = [
  { title: 'Gym', icon: 'dumbbell' },
  { title: 'PT studio', icon: 'user' },
  { title: 'Yoga', icon: 'wind' },
  { title: 'Spin & cycle', icon: 'rotate-cw' },
  { title: 'Wellness', icon: 'heart' },
];
const BUSINESS_TYPES_COL2: NavMenuItemData[] = [
  { title: 'Fitness studio', icon: 'activity' },
  { title: 'Boxing studio', icon: 'zap' },
  { title: 'Pilates', icon: 'circle' },
  { title: 'Martial arts', icon: 'shield' },
];

// Real content pulled from the "Resources Dropdown" Figma node (460:2588) —
// 2 columns, each row WITH a one-line description.
const RESOURCES_LEARN: NavMenuItemData[] = [
  { title: 'Blog', description: 'Playbooks and industry trends', icon: 'file-text' },
  { title: 'Customer stories', description: 'How studios grow with Glofox', icon: 'award' },
  { title: 'Ebooks', description: 'Free guides and templates', icon: 'book-open' },
  { title: 'Compare alternatives', description: 'See how Glofox stacks up', icon: 'compass' },
];
const RESOURCES_CALCULATORS: NavMenuItemData[] = [
  {
    title: 'Payments ROI calculator',
    description: "See where payment revenue is lost — and what you'd recover",
    icon: 'dollar-sign',
  },
  {
    title: 'Retention ROI calculator',
    description: 'Put a number on reducing member churn',
    icon: 'refresh-cw',
  },
  {
    title: 'Growth ROI calculator',
    description: 'Model revenue from new leads and conversions',
    icon: 'trending-up',
  },
];

// Real content pulled from the "Platform Mega Panel" Figma node (460:2714) —
// "By goal" (4 items, with description) + "By feature" (8 items, 2 columns,
// no description).
const PLATFORM_BY_GOAL: NavMenuItemData[] = [
  {
    title: 'Manage my business',
    description: 'Scheduling, payments and day-to-day admin in one place',
    icon: 'settings',
  },
  {
    title: 'Grow my business',
    description: 'Fill classes, convert leads and win new members',
    icon: 'trending-up',
  },
  {
    title: 'Engage my members',
    description: 'Branded app, messaging and community tools',
    icon: 'users',
  },
  {
    title: 'Scale my business',
    description: 'Multi-location controls, reporting and insights',
    icon: 'layers',
  },
];
const PLATFORM_BY_FEATURE_COL1: NavMenuItemData[] = [
  { title: 'Membership Management', icon: 'users' },
  { title: 'Branded Member App', icon: 'smartphone' },
  { title: 'CRM', icon: 'target' },
  { title: 'Reporting', icon: 'bar-chart-3' },
];
const PLATFORM_BY_FEATURE_COL2: NavMenuItemData[] = [
  { title: 'Scheduling & Booking', icon: 'calendar' },
  { title: 'Billing & Payments', icon: 'credit-card' },
  { title: 'Check-in & Access Control', icon: 'key-round' },
  { title: 'Staff Management', icon: 'briefcase' },
];

// Mobile accordion "sub-item card" content (Mobile Nav Accordion Item,
// 463:2661) — kicker + flat label list per trigger, no icons/descriptions,
// per that node's description ("swap per trigger").
const MOBILE_ACCORDION_GROUPS: Record<string, { kicker: string; items: string[] }[]> = {
  platform: [{ kicker: 'BY GOAL', items: PLATFORM_BY_GOAL.map((item) => item.title) }],
  'business-types': [
    {
      kicker: 'BUILT FOR YOUR BUSINESS',
      items: [...BUSINESS_TYPES_COL1, ...BUSINESS_TYPES_COL2].map((item) => item.title),
    },
  ],
  resources: [
    { kicker: 'LEARN', items: RESOURCES_LEARN.map((item) => item.title) },
    { kicker: 'CALCULATORS', items: RESOURCES_CALCULATORS.map((item) => item.title) },
  ],
};

function DropdownColumn({ items }: { items: NavMenuItemData[] }) {
  return (
    <div className={styles.dropdownCol}>
      {items.map((item) => (
        <NavMenuItem
          key={item.title}
          href="#"
          title={item.title}
          description={item.description}
          showDescription={Boolean(item.description)}
          icon={item.icon}
        />
      ))}
    </div>
  );
}

function BusinessTypesDropdown() {
  return (
    <div className={`${styles.dropdownCard} ${styles.dropdownCardBusinessTypes}`}>
      <p className={styles.dropdownKicker}>BUILT FOR YOUR BUSINESS</p>
      <div className={styles.dropdownGrid}>
        <DropdownColumn items={BUSINESS_TYPES_COL1} />
        <DropdownColumn items={BUSINESS_TYPES_COL2} />
      </div>
      <div className={styles.dropdownFooter}>
        <span className={styles.dropdownFooterText}>Need a different solution?</span>
        <LinkArrow href="#">Contact sales</LinkArrow>
      </div>
    </div>
  );
}

function ResourcesDropdown() {
  return (
    <div className={`${styles.dropdownCard} ${styles.dropdownCardResources}`}>
      <div className={styles.dropdownGrid}>
        <div className={styles.dropdownGroup}>
          <p className={styles.dropdownKicker}>LEARN</p>
          <DropdownColumn items={RESOURCES_LEARN} />
        </div>
        <div className={styles.dropdownGroup}>
          <p className={styles.dropdownKicker}>CALCULATORS</p>
          <DropdownColumn items={RESOURCES_CALCULATORS} />
        </div>
      </div>
      <div className={styles.dropdownFooter}>
        <LinkArrow href="#">View all resources</LinkArrow>
      </div>
    </div>
  );
}

function PlatformMegaPanel() {
  return (
    <div className={styles.platformPanel}>
      <div className={styles.platformGrid}>
        <div className={styles.platformByGoal}>
          <p className={styles.dropdownKicker}>BY GOAL</p>
          <DropdownColumn items={PLATFORM_BY_GOAL} />
        </div>
        <div className={styles.platformDivider} aria-hidden="true" />
        <div className={styles.platformByFeature}>
          <p className={styles.dropdownKicker}>BY FEATURE</p>
          <div className={styles.platformFeatureGrid}>
            <DropdownColumn items={PLATFORM_BY_FEATURE_COL1} />
            <DropdownColumn items={PLATFORM_BY_FEATURE_COL2} />
          </div>
        </div>
      </div>
      <div className={styles.platformFooter}>
        <LinkArrow href="#">See full platform overview</LinkArrow>
        <LinkArrow href="#">View all features</LinkArrow>
      </div>
    </div>
  );
}

// Official ABC Glofox lockup, traced from the brand team's logo artwork.
// The monogram keeps its fixed brand teal in both themes; the "GLOFOX"
// wordmark uses currentColor so it inverts with `.logo`'s color on dark navbars.
function GlofoxLogo() {
  return (
    <svg
      width="59"
      height="32"
      viewBox="120.411 143.662 602.633 330.806"
      fill="none"
      aria-hidden="true"
    >
      <path
        transform="matrix(1,0,0,-1,481.61,278.52)"
        d="M0 0C6.718-6.245 10.48-14.727 10.591-23.882 10.697-32.546 7.35-40.763 1.169-47.022-5.38-53.65-14.576-57.451-24.063-57.451-38.562-57.451-48.802-45.944-64.309-27.168-77.674-10.986-93.263 7.89-116.728 18.296V89.845C-116.728 98.213-109.921 105.021-101.553 105.021H-23.443C-5.595 105.021 9.324 91.359 10.521 73.92 10.983 67.18 9.764 62.376 2.011 56.303-6.427 49.696-11.526 39.756-11.979 29.032-12.442 18.087-8.075 7.505 0 0M-146.566-21.544C-146.566-28.052-149.204-32.482-153.625-33.395-157.17-34.122-162.02-32.438-165.007-25.507L-166.019-25.943-165.008-25.507-173.443-5.935C-167.705-4.438-161.715-3.639-155.553-3.639V-3.638C-152.419-3.638-149.427-3.823-146.566-4.177ZM40.427-23.519C40.217-6.37 32.887 10.167 20.315 21.855 18.643 23.407 17.739 25.564 17.832 27.771 17.892 29.198 18.388 31.23 20.408 32.813 29.713 40.101 41.898 52.503 40.289 75.962 38.022 108.988 10.028 134.858-23.443 134.858H-101.553C-126.373 134.858-146.566 114.666-146.566 89.845V25.828C-149.468 26.072-152.461 26.2-155.553 26.2V26.199C-165.897 26.199-175.895 24.618-185.348 21.687L-224.53 112.6C-230.455 126.329-243.424 134.858-258.378 134.858-273.331 134.858-286.3 126.329-292.224 112.6L-356.268-35.821C-361.199-47.249-360.06-60.281-353.221-70.68-346.382-81.08-334.869-87.289-322.422-87.289H-299.343V-57.451H-322.422C-325.717-57.451-327.513-55.468-328.292-54.286-329.069-53.104-330.178-50.669-328.871-47.642L-264.828 100.779C-263.176 104.607-259.767 105.021-258.378 105.021-256.988 105.021-253.579 104.607-251.93 100.784L-212.271 8.767C-241.621-10.982-261.118-45.577-261.118-84.874-261.118-146.12-213.762-195.948-155.553-195.948-121.909-195.948-89.989-178.848-70.167-150.207L-94.702-133.228C-109.164-154.124-131.344-166.11-155.553-166.11-197.309-166.11-231.28-129.668-231.28-84.874-231.28-57.968-219.02-34.079-200.18-19.287L-192.409-37.317-191.579-36.959V-36.96L-192.408-37.317C-184.23-56.292-166.221-66.464-147.596-62.616-129.133-58.808-116.728-42.302-116.728-21.544V-16.018C-105.64-23.981-96.61-34.914-87.315-46.169-70.618-66.385-53.354-87.289-24.063-87.289-6.654-87.289 10.279-80.255 22.395-67.991 34.226-56.015 40.63-40.221 40.427-23.519"
        fill="#00b487"
      />
      <path
        transform="matrix(1,0,0,-1,479.9009,454.66493)"
        d="M0 0C-15.123 0-26.711 11.653-26.711 26.057-26.711 40.394-15.123 51.981 0 51.981 7.267 51.981 14.076 49.101 18.658 44.584L12.112 38.233C8.642 41.703 4.517 43.274 0 43.274-9.754 43.274-17.152 35.483-17.152 26.122-17.152 16.498-9.754 8.708 0 8.708 7.529 8.708 13.486 13.879 14.861 20.557H.786L4.452 28.806H24.747V25.729C24.747 11.653 13.945 0 0 0"
        fill="currentColor"
      />
      <path
        transform="matrix(1,0,0,-1,521.161,404.1928)"
        d="M0 0V-40.365H16.868V-48.963H-9.517V0Z"
        fill="currentColor"
      />
      <path
        transform="matrix(1,0,0,-1,547.7413,428.60859)"
        d="M0 0C0-9.583 7.417-17.393 17.196-17.393 26.91-17.393 34.327-9.583 34.327 0 34.327 9.451 26.91 17.262 17.196 17.262 7.417 17.262 0 9.451 0 0M43.909 0C43.909-14.439 32.226-26.122 17.196-26.122 2.035-26.122-9.583-14.439-9.583 0-9.583 14.374 2.035 25.991 17.196 25.991 32.226 25.991 43.909 14.374 43.909 0"
        fill="currentColor"
      />
      <path
        transform="matrix(1,0,0,-1,596.4398,404.1928)"
        d="M0 0H28.551V-8.27H9.517V-21.069H26.385V-29.339H9.517V-48.963H0Z"
        fill="currentColor"
      />
      <path
        transform="matrix(1,0,0,-1,637.394,428.60859)"
        d="M0 0C0-9.583 7.417-17.393 17.196-17.393 26.91-17.393 34.327-9.583 34.327 0 34.327 9.451 26.91 17.262 17.196 17.262 7.417 17.262 0 9.451 0 0M43.909 0C43.909-14.439 32.226-26.122 17.196-26.122 2.035-26.122-9.583-14.439-9.583 0-9.583 14.374 2.035 25.991 17.196 25.991 32.226 25.991 43.909 14.374 43.909 0"
        fill="currentColor"
      />
      <path
        transform="matrix(1,0,0,-1,701.2542,433.7281)"
        d="M0 0-11.027-19.428H-21.528L-6.301 6.301-20.215 29.535H-9.583L.065 12.93 9.845 29.535H19.953L6.17 6.498 21.79-19.428H11.552Z"
        fill="currentColor"
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

  // Desktop dropdown open state: hover-to-open, mouse-leave-to-close, per
  // the Nav Link Trigger / Business Types Dropdown Figma descriptions — the
  // trigger and its panel share one mouseenter/mouseleave boundary (the
  // wrapper div below) so they open and close together.
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Mobile accordion open section (Mobile Nav Accordion Item) — click to
  // expand/collapse; only one section open at a time.
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

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
              </span>
              <nav className={styles.links} aria-label="Primary">
                {NAV_ITEMS.map((item) =>
                  item.hasDropdown ? (
                    <div
                      key={item.key}
                      className={styles.navItemWrapper}
                      data-fullwidth={item.key === 'platform' ? '' : undefined}
                      onMouseEnter={() => setOpenDropdown(item.key)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <NavLinkTrigger label={item.label} open={openDropdown === item.key} />
                      {openDropdown === item.key &&
                        (item.key === 'platform' ? (
                          <div className={styles.platformPanelAnchor}>
                            <PlatformMegaPanel />
                          </div>
                        ) : (
                          <div className={styles.dropdownPanel}>
                            {item.key === 'business-types' ? (
                              <BusinessTypesDropdown />
                            ) : (
                              <ResourcesDropdown />
                            )}
                          </div>
                        ))}
                    </div>
                  ) : (
                    <a key={item.key} href="#" className={styles.link}>
                      {item.label}
                    </a>
                  ),
                )}
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
            {NAV_ITEMS.map((item) =>
              item.hasDropdown ? (
                <div key={item.key} className={styles.mobileAccordionItem}>
                  <button
                    type="button"
                    className={styles.mobileAccordionButton}
                    data-state={expandedMobileSection === item.key ? 'expanded' : 'collapsed'}
                    aria-expanded={expandedMobileSection === item.key}
                    onClick={() =>
                      setExpandedMobileSection((current) => (current === item.key ? null : item.key))
                    }
                  >
                    <span className={styles.mobileAccordionLabel}>{item.label}</span>
                    <Icon name="chevron-down" size={18} className={styles.mobileAccordionChevron} />
                  </button>
                  {expandedMobileSection === item.key && (
                    <div className={styles.mobileSubItemCard}>
                      {MOBILE_ACCORDION_GROUPS[item.key].map((group) => (
                        <div key={group.kicker} className={styles.mobileSubGroup}>
                          <p className={styles.mobileSubKicker}>{group.kicker}</p>
                          {group.items.map((label) => (
                            <p key={label} className={styles.mobileSubItem}>
                              {label}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={item.key} href="#" className={styles.mobileLink}>
                  {item.label}
                </a>
              ),
            )}
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
