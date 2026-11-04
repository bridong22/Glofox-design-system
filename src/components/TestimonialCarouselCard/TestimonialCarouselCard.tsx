import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { LogoBar } from '../LogoBar';
import { CarouselTag } from '../CarouselTag';
import { CarouselArrow } from '../CarouselArrow';
import { ScrollIndicator } from '../ScrollIndicator';
import styles from './TestimonialCarouselCard.module.css';

export interface TestimonialSlide {
  quote: string;
  authorName?: string;
  authorRole?: string;
  showTag?: boolean;
  tagScore?: string;
  tagDescription?: string;
}

export interface TestimonialCarouselCardProps {
  showHeader?: boolean;
  headline?: string;
  description?: string;
  showLogoMarquee?: boolean;
  brands?: string[];
  imageUrl?: string;
  imageAlt?: string;
  slides?: TestimonialSlide[];
  className?: string;
}

const DEFAULT_SLIDES: TestimonialSlide[] = [
  {
    quote: 'Quote. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at ullamcorper odio.',
    authorName: 'Author Name',
    authorRole: 'Author Role, Optional Company',
    showTag: true,
    tagScore: '100%',
    tagDescription: 'Improvement description',
  },
  {
    quote: 'Lorem ipsum dolor sit amet. Maecenas massa ante, tristique vel tempor euismod, feugiat ac tortor.',
    authorName: 'Author Name',
    authorRole: 'Author Role',
  },
  {
    quote: 'Aenean condimentum lectus eget neque ornare, non efficitur mauris finibus.',
    authorName: 'Author Name',
    authorRole: 'Author Role, Optional Company',
    showTag: true,
    tagScore: '100%',
    tagDescription: 'Improvement description',
  },
];

export function TestimonialCarouselCard({
  showHeader = true,
  headline = 'Testimonial Carousel',
  description = 'Description. Short supporting copy for the section.',
  showLogoMarquee = true,
  brands,
  imageUrl,
  imageAlt = '',
  slides = DEFAULT_SLIDES,
  className,
}: TestimonialCarouselCardProps) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const classes = [styles.section, className].filter(Boolean).join(' ');

  const goPrev = () => setIndex((current) => Math.max(0, current - 1));
  const goNext = () => setIndex((current) => Math.min(slides.length - 1, current + 1));

  return (
    <div className={classes}>
      {showHeader && (
        <div className={styles.header}>
          <SectionHeading align="left" showEyebrow={false} title={headline} subtitle={description} />
        </div>
      )}
      {showLogoMarquee && (
        <div className={styles.logoMarquee}>
          <LogoBar brands={brands} />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.media}>
            {imageUrl ? (
              <img className={styles.image} src={imageUrl} alt={imageAlt} />
            ) : (
              <p className={styles.imagePlaceholderLabel}>Image</p>
            )}
          </div>
          <div className={styles.carousel}>
            {slide && (
              <div className={styles.slide}>
                {slide.showTag && (
                  <CarouselTag score={slide.tagScore} description={slide.tagDescription} />
                )}
                <p className={styles.quote}>{slide.quote}</p>
                <p className={styles.attribution}>
                  {'— '}
                  <span className={styles.authorName}>{slide.authorName}</span>
                  {slide.authorRole ? `, ${slide.authorRole}` : null}
                </p>
              </div>
            )}
            <div className={styles.controls}>
              <ScrollIndicator style="dot" count={slides.length} active={index + 1} onSelect={(i) => setIndex(i - 1)} />
              <div className={styles.arrows}>
                <CarouselArrow direction="prev" onClick={goPrev} disabled={index === 0} />
                <CarouselArrow direction="next" onClick={goNext} disabled={index === slides.length - 1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
