import type { Meta, StoryObj } from '@storybook/react';
import { tokenValue } from './tokenValue';

const SPACE_TOKENS = [
  '--space-xs',
  '--space-sm',
  '--space-md',
  '--space-lg',
  '--space-xl',
  '--space-2xl',
  '--space-3xl',
  '--space-4xl',
  '--space-5xl',
  '--space-6xl',
  '--space-7xl',
  '--space-8xl',
];
const RADIUS_TOKENS = ['--radius-sm', '--radius-base', '--radius-md', '--radius-lg', '--radius-xl', '--radius-full'];

const meta: Meta = {
  title: 'Foundations/Spacing & Radius',
};

export default meta;
type Story = StoryObj;

export const Spacing: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {SPACE_TOKENS.map((cssVar) => (
        <div key={cssVar} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ width: 140, fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>
            {cssVar} ({tokenValue(cssVar)})
          </div>
          <div style={{ height: 16, width: `var(${cssVar})`, background: 'var(--color-brand)', borderRadius: 'var(--radius-sm)' }} />
        </div>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
      {RADIUS_TOKENS.map((cssVar) => (
        <div key={cssVar} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: 'var(--color-brand-subtle)',
              border: '1px solid var(--color-brand)',
              borderRadius: `var(${cssVar})`,
            }}
          />
          <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>
            {cssVar} ({tokenValue(cssVar)})
          </div>
        </div>
      ))}
    </div>
  ),
};
