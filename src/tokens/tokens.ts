/**
 * TS mirror of tokens.css for consumers that need raw values
 * (e.g. chart libraries, inline style calculations).
 */
export const colors = {
  fg: 'var(--color-fg)',
  fgMuted: 'var(--color-fg-muted)',
  fgSubtle: 'var(--color-fg-subtle)',
  fgDark: 'var(--color-fg-dark)',
  bg: 'var(--color-bg)',
  bgSubtle: 'var(--color-bg-subtle)',
  bgMuted: 'var(--color-bg-muted)',
  bgInverse: 'var(--color-bg-inverse)',
  border: 'var(--color-border)',
  borderSubtle: 'var(--color-border-subtle)',
  borderMid: 'var(--color-border-mid)',
  borderStrong: 'var(--color-border-strong)',
  brand: 'var(--color-brand)',
  brandHover: 'var(--color-brand-hover)',
  brandSubtle: 'var(--color-brand-subtle)',
  brandAlt: 'var(--color-brand-alt)',
  success: 'var(--color-success)',
  danger: 'var(--color-danger)',
  rating: 'var(--color-rating)',
  warning: 'var(--color-warning)',
  cta: 'var(--color-cta)',
  ctaHover: 'var(--color-cta-hover)',
  ctaPressed: 'var(--color-cta-pressed)',
  ctaSubtle: 'var(--color-cta-subtle)',
  gradientStart: 'var(--color-gradient-start)',
  gradientMid: 'var(--color-gradient-mid)',
  gradientEnd: 'var(--color-gradient-end)',
  pink: 'var(--color-pink)',
  lavendar: 'var(--color-lavendar)',
  pinkMint: 'var(--color-pink-mint)',
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  base: 'var(--radius-base)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  xl: 'var(--radius-xl)',
  full: 'var(--radius-full)',
} as const;

export const space = {
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
  '3xl': 'var(--space-3xl)',
  '4xl': 'var(--space-4xl)',
  '5xl': 'var(--space-5xl)',
  '6xl': 'var(--space-6xl)',
  '7xl': 'var(--space-7xl)',
  '8xl': 'var(--space-8xl)',
  // Legacy numeric aliases (pre-2026-10-27 naming), kept for existing consumers.
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
} as const;

export const container = {
  maxWidth: 'var(--container-max-width)',
  padding: 'var(--container-padding)',
  narrowMaxWidth: 'var(--container-narrow-max-width)',
} as const;
