import { ImagePlaceholderBlock } from '../ImagePlaceholderBlock';
import { LinkArrow } from '../LinkArrow';
import { SectionHeaderWithLink } from '../SectionHeaderWithLink';
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

function GridCard({ image, category = 'Business Tips', title, href = '#' }: ResourceCardGridCard) {
  return (
    <div className={styles.card}>
      <ImagePlaceholderBlock src={image} alt={title} aspectRatio="280 / 180" />
      <p className={styles.cardCategory}>{category}</p>
      <p className={styles.cardTitle}>{title}</p>
      <LinkArrow href={href} className={styles.cardLink}>
        See All
      </LinkArrow>
    </div>
  );
}

export function ResourceCardGrid({ title, href, linkLabel, cards }: ResourceCardGridProps) {
  return (
    <div className={styles.resourceCardGrid}>
      <SectionHeaderWithLink title={title} href={href} linkLabel={linkLabel} />
      <div className={styles.grid}>
        {cards.map((card) => (
          <GridCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}
