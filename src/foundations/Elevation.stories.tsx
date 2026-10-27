import type { Meta, StoryObj } from '@storybook/react';
import { tokenValue } from './tokenValue';

const meta: Meta = {
  title: 'Foundations/Elevation',
};

export default meta;
type Story = StoryObj;

export const Shadows: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', gap: 'var(--space-8)' }}>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: 160,
            height: 100,
            background: 'var(--color-bg)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-card)',
          }}
        />
        <div style={{ marginTop: 'var(--space-3)', fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>
          --shadow-card
          <br />
          {tokenValue('--shadow-card')}
        </div>
      </div>
    </div>
  ),
};
