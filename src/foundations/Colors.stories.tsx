import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { tokenValue } from './tokenValue';

const COLOR_TOKENS = [
  '--color-fg',
  '--color-fg-muted',
  '--color-fg-subtle',
  '--color-fg-dark',
  '--color-bg',
  '--color-bg-subtle',
  '--color-bg-muted',
  '--color-bg-inverse',
  '--color-border',
  '--color-border-subtle',
  '--color-border-mid',
  '--color-border-strong',
  '--color-brand',
  '--color-brand-hover',
  '--color-brand-subtle',
  '--color-brand-alt',
  '--color-success',
  '--color-danger',
  '--color-rating',
  '--color-warning',
  '--color-cta',
  '--color-cta-hover',
  '--color-cta-pressed',
  '--color-cta-subtle',
  '--color-gradient-start',
  '--color-gradient-mid',
  '--color-gradient-end',
  '--color-pink',
  '--color-lavendar',
  '--color-pink-mint',
];

/**
 * Only these tokens are redefined by the `[data-brand="abc"]` override block
 * in tokens.css — everything else in COLOR_TOKENS is identical across both
 * brands, so this list is intentionally the narrower "Brand & CTA" subset.
 */
const BRAND_OVERRIDE_TOKENS = [
  '--color-brand',
  '--color-brand-hover',
  '--color-brand-subtle',
  '--color-brand-alt',
  '--color-cta',
  '--color-cta-hover',
  '--color-cta-subtle',
  '--color-cta-pressed',
];

function Swatch({ cssVar, brand }: { cssVar: string; brand?: 'abc' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (ref.current) {
      // Read from this element, not document.documentElement — it's nested
      // inside the data-brand wrapper below, so it resolves whichever value
      // actually cascades here (the override, for the ABC column).
      setValue(tokenValue(cssVar, ref.current));
    }
  }, [cssVar, brand]);

  return (
    <div
      ref={ref}
      data-brand={brand}
      style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
    >
      <div
        style={{
          height: 64,
          background: `var(${cssVar})`,
          borderBottom: '1px solid var(--color-border-subtle)',
        }}
      />
      <div style={{ padding: 'var(--space-2) var(--space-3)' }}>
        <div style={{ fontSize: 'var(--font-size-tiny)', fontWeight: 'var(--font-weight-tiny)' }}>{cssVar}</div>
        <div style={{ fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>{value}</div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-family-base)',
        fontSize: 'var(--font-size-small)',
        fontWeight: 600,
        color: 'var(--color-fg-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
        margin: 'var(--space-8) 0 var(--space-3)',
      }}
    >
      {children}
    </h3>
  );
}

const meta: Meta = {
  title: 'Foundations/Colors',
};

export default meta;
type Story = StoryObj;

export const AllColors: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)' }}>
      <SectionLabel>All semantic tokens (Glofox, the default theme)</SectionLabel>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {COLOR_TOKENS.map((cssVar) => (
          <Swatch key={cssVar} cssVar={cssVar} />
        ))}
      </div>

      <SectionLabel>Brand &amp; CTA — Glofox vs. ABC theme</SectionLabel>
      <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-fg-muted)', margin: '0 0 var(--space-4)', maxWidth: 640 }}>
        These 8 tokens are the only ones the <code>[data-brand=&quot;abc&quot;]</code> override in tokens.css redefines
        — every other token above is identical across both brands. Toggle the Storybook toolbar&apos;s &quot;Brand&quot;
        control to re-theme the rest of the library; this comparison is shown statically here since the two values
        need to render side by side.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
        }}
      >
        {BRAND_OVERRIDE_TOKENS.map((cssVar) => (
          <div key={cssVar} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>Glofox</div>
            <Swatch cssVar={cssVar} />
            <div style={{ fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)', marginTop: 4 }}>ABC</div>
            <Swatch cssVar={cssVar} brand="abc" />
          </div>
        ))}
      </div>

      <SectionLabel>Not shown here: raw Figma primitives</SectionLabel>
      <p style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-fg-muted)', margin: 0, maxWidth: 640 }}>
        Figma&apos;s Colour page also includes a full primitive ramp (teal/blue/indigo/etc. at 50–950) under a
        &quot;Primitives&quot; group. Figma&apos;s own note on that group says these are &quot;raw palette values, not
        used directly in the app — each semantic token above references one of these&quot;, so they intentionally have
        no corresponding CSS custom properties here; only the semantic tokens that consume them do.
      </p>
    </div>
  ),
};
