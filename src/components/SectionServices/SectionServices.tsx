import { SectionHeading } from '../SectionHeading';
import { ImageTileCard, type ImageTileCardProps } from '../ImageTileCard';
import styles from './SectionServices.module.css';

export interface SectionServicesProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  tiles?: ImageTileCardProps[];
  showRow2?: boolean;
  className?: string;
}

const DEFAULT_TILES: ImageTileCardProps[] = Array.from({ length: 8 }, () => ({}));

export function SectionServices({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  tiles = DEFAULT_TILES,
  showRow2 = true,
  className,
}: SectionServicesProps) {
  const row1 = tiles.slice(0, 4);
  const row2 = tiles.slice(4, 8);
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.row}>
          {row1.map((tile, index) => (
            <ImageTileCard key={index} className={styles.tile} {...tile} />
          ))}
        </div>
        {showRow2 && row2.length > 0 && (
          <div className={styles.row}>
            {row2.map((tile, index) => (
              <ImageTileCard key={index} className={styles.tile} {...tile} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
