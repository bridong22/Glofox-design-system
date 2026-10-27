import type { Meta, StoryObj } from '@storybook/react';
import { tokenValue } from './tokenValue';

const TYPE_SCALE = [
  { name: 'h1', sample: 'Grow your fitness business' },
  { name: 'h2', sample: 'Grow your fitness business' },
  { name: 'body', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'small', sample: 'The quick brown fox jumps over the lazy dog.' },
  { name: 'tiny', sample: 'The quick brown fox jumps over the lazy dog.' },
];

const meta: Meta = {
  title: 'Foundations/Typography',
};

export default meta;
type Story = StoryObj;

export const TypeScale: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
      <div>
        <div style={{ fontSize: 'var(--font-size-tiny)', fontWeight: 'var(--font-weight-tiny)', color: 'var(--color-fg-muted)' }}>
          --font-family-base
        </div>
        <div style={{ fontSize: 'var(--font-size-body)' }}>{tokenValue('--font-family-base')}</div>
      </div>

      {TYPE_SCALE.map(({ name, sample }) => (
        <div key={name} style={{ borderTop: '1px solid var(--color-border-subtle)', paddingTop: 'var(--space-4)' }}>
          <div
            style={{
              fontSize: 'var(--font-size-tiny)',
              fontWeight: 'var(--font-weight-tiny)',
              color: 'var(--color-fg-muted)',
              marginBottom: 'var(--space-2)',
            }}
          >
            {`--font-size-${name} / --font-weight-${name} / --line-height-${name}`} — {tokenValue(`--font-size-${name}`)}
            {', '}
            {tokenValue(`--font-weight-${name}`)}
            {', '}
            {tokenValue(`--line-height-${name}`)}
          </div>
          <div
            style={{
              fontSize: `var(--font-size-${name})`,
              fontWeight: `var(--font-weight-${name})`,
              lineHeight: `var(--line-height-${name})`,
              color: 'var(--color-fg)',
            }}
          >
            {sample}
          </div>
        </div>
      ))}
    </div>
  ),
};
