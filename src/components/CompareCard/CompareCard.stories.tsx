import type { Meta, StoryObj } from '@storybook/react';
import { CompareCard } from './CompareCard';

const meta: Meta<typeof CompareCard> = {
  title: 'Components/CompareCard',
  component: CompareCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CompareCard>;

export const Sky: Story = {};

export const Blush: Story = {
  args: {
    tone: 'blush',
    label: 'Before',
    title: 'Manual spreadsheets',
    bullets: ['Double bookings go unnoticed', 'No-shows cost staff time', 'Payments tracked by hand'],
  },
};

export const Pair: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px' }}>
      <CompareCard
        tone="blush"
        label="Before"
        title="Manual spreadsheets"
        bullets={['Double bookings go unnoticed', 'No-shows cost staff time', 'Payments tracked by hand']}
      />
      <CompareCard
        tone="sky"
        label="After"
        title="Glofox"
        bullets={['Real-time booking sync', 'Automated reminders cut no-shows', 'Payments collected automatically']}
      />
    </div>
  ),
};
