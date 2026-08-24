import { SectionHeaderWithLink } from '../SectionHeaderWithLink';
import { BlogResourceCard } from '../BlogResourceCard';
import styles from './ResourceCardGrid.module.css';

export interface ResourceCardGridCard {
  image?: string;
  category?: string;
  title: string;
  href?: string;
}

export interface ResourceCardGridProps {
  title: string;
  href?: string;
  linkLabel?: string;
  cards: ResourceCardGridCard[];
}

export function ResourceCardGrid({ title, href, linkLabel, cards }: ResourceCardGridProps) {
  return (
    <div className={styles.resourceCardGrid}>
      <SectionHeaderWithLink title={title} href={href} linkLabel={linkLabel} />
      <div className={styles.grid}>
        {cards.map((card) => (
          <BlogResourceCard
            key={card.title}
            image={card.image}
            category={card.category}
            title={card.title}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
}
