import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { TabPill } from '../TabPill';
import { ChecklistItem } from '../ChecklistItem';
import { CtaGroup } from '../CtaGroup';
import { MediaVideo } from '../MediaVideo';
import styles from './SectionFeaturesTabs.module.css';

export interface FeaturesTab {
  label: string;
  heading: string;
  description: string;
  items?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface SectionFeaturesTabsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  media?: 'image' | 'video';
  tabs?: FeaturesTab[];
  defaultActiveIndex?: number;
  className?: string;
}

const DEFAULT_ITEMS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
];

const DEFAULT_TABS: FeaturesTab[] = Array.from({ length: 4 }, () => ({
  label: 'Tab label',
  heading: 'Tab heading',
  description: 'Describe the feature behind this tab and the outcome it drives.',
  items: DEFAULT_ITEMS,
}));

export function SectionFeaturesTabs({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  media = 'image',
  tabs = DEFAULT_TABS,
  defaultActiveIndex = 0,
  className,
}: SectionFeaturesTabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const activeTab = tabs[activeIndex] ?? tabs[0];
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.tabs}>
          {tabs.map((tab, index) => (
            <TabPill key={tab.label + index} active={index === activeIndex} onClick={() => setActiveIndex(index)}>
              {tab.label}
            </TabPill>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.content}>
            <p className={styles.heading}>{activeTab.heading}</p>
            <p className={styles.description}>{activeTab.description}</p>
            {activeTab.items && activeTab.items.length > 0 && (
              <div className={styles.checklist}>
                {activeTab.items.map((item, index) => (
                  <ChecklistItem key={index} label={item} />
                ))}
              </div>
            )}
            <CtaGroup align="left" />
          </div>
          <div className={styles.media}>
            {media === 'video' ? (
              <MediaVideo posterUrl={activeTab.imageUrl} posterAlt={activeTab.imageAlt} />
            ) : activeTab.imageUrl ? (
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
