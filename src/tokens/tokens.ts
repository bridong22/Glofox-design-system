/**
 * TS mirror of tokens.css for consumers that need raw values
 * (e.g. chart libraries, inline style calculations).
 */
export const colors = {
  fg: 'var(--color-fg)',
  fgMuted: 'var(--color-fg-muted)',
  fgSubtle: 'var(--color-fg-subtle)',
  bg: 'var(--color-bg)',
  bgSubtle: 'var(--color-bg-subtle)',
  border: 'var(--color-border)',
  borderSubtle: 'var(--color-border-subtle)',
  brand: 'var(--color-brand)',
  brandSubtle: 'var(--color-brand-subtle)',
  cta: 'var(--color-cta)',
  ctaHover: 'var(--color-cta-hover)',
  danger: 'var(--color-danger)',
} as const;

export const radius = {
  sm: 'var(--radius-sm)',
  base: 'var(--radius-base)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  full: 'var(--radius-full)',
} as const;

export const space = {
  1: 'var(--space-1)',
  2: 'var(--space-2)',
  3: 'var(--space-3)',
  4: 'var(--space-4)',
  6: 'var(--space-6)',
  8: 'var(--space-8)',
  12: 'var(--space-12)',
  16: 'var(--space-16)',
} as const;
