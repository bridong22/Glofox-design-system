import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { TabPill } from '../TabPill';
import styles from './SectionTabbedSection.module.css';

export interface TabbedSectionTab {
  label: string;
  heading: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

export interface SectionTabbedSectionProps {
  showHeading?: boolean;
  headline?: string;
  subheadline?: string;
  tabs?: TabbedSectionTab[];
  defaultActiveIndex?: number;
  className?: string;
}

const DEFAULT_TABS: TabbedSectionTab[] = [
  {
    label: 'Membership Management',
    heading: 'Membership Management',
    description:
      'Create flexible membership plans, automate renewals, and give members self-serve control over their accounts.',
  },
  {
    label: 'Scheduling & Booking',
    heading: 'Scheduling & Booking',
    description: 'Let members book classes and sessions online while staff manage capacity in real time.',
  },
  {
    label: 'Branded Member App',
    heading: 'Branded Member App',
    description:
      'Give members a seamless way to book, buy, and manage their account through a branded app and customizable web experience that delivers a premium, on-brand experience.',
  },
  {
    label: 'Billing & Payments',
    heading: 'Billing & Payments',
    description: 'Automate recurring billing, collect payments, and reduce failed-payment churn.',
  },
  { label: 'CRM', heading: 'CRM', description: 'Track leads and members through one unified pipeline.' },
  {
    label: 'Check-in & Access Control',
    heading: 'Check-in & Access Control',
    description: 'Give members fast, secure check-in while keeping facility access under control.',
  },
  {
    label: 'Analytics',
    heading: 'Analytics',
    description: 'See the metrics that matter — retention, revenue, and attendance — in one dashboard.',
  },
  {
    label: 'Staff Management',
    heading: 'Staff Management',
    description: 'Schedule staff, manage payroll, and track performance from one place.',
  },
  {
    label: 'AI Workflows',
    heading: 'AI Workflows',
    description: 'Automate repetitive front-desk and marketing tasks with built-in AI workflows.',
  },
  {
    label: 'Multi-Location',
    heading: 'Multi-Location',
    description: 'Manage every location from a single account with shared reporting and settings.',
  },
];

export function SectionTabbedSection({
  showHeading = true,
  headline = 'Product Overview',
  subheadline = 'Everything you need to manage the member journey, streamline operations, and drive growth.',
  tabs = DEFAULT_TABS,
  defaultActiveIndex = 2,
  className,
}: SectionTabbedSectionProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const activeTab = tabs[activeIndex] ?? tabs[0];
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && (
        <SectionHeading showEyebrow={false} title={headline} subtitle={subheadline} size="large" />
      )}
      <div className={styles.body}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <TabPill key={tab.label} active={index === activeIndex} onClick={() => setActiveIndex(index)}>
              {tab.label}
            </TabPill>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.textPanel}>
            <p className={styles.panelHeading}>{activeTab.heading}</p>
            <p className={styles.panelDescription}>{activeTab.description}</p>
          </div>
          <div className={styles.media}>
            {activeTab.imageUrl ? (
              <img className={styles.image} src={activeTab.imageUrl} alt={activeTab.imageAlt ?? ''} />
            ) : (
              <p className={styles.mediaPlaceholder}>Image</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
