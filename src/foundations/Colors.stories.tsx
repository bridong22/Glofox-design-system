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

const meta: Meta = {
  title: 'Foundations/Colors',
};

export default meta;
type Story = StoryObj;

export const AllColors: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
        fontFamily: 'var(--font-family-base)',
      }}
    >
      {COLOR_TOKENS.map((cssVar) => (
        <div key={cssVar} style={{ border: '1px solid var(--color-border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <div
            style={{
              height: 64,
              background: `var(${cssVar})`,
              borderBottom: '1px solid var(--color-border-subtle)',
            }}
          />
          <div style={{ padding: 'var(--space-2) var(--space-3)' }}>
            <div style={{ fontSize: 'var(--font-size-tiny)', fontWeight: 'var(--font-weight-tiny)' }}>{cssVar}</div>
            <div style={{ fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>{tokenValue(cssVar)}</div>
          </div>
        </div>
      ))}
    </div>
  ),
};
