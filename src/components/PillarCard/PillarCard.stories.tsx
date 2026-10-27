import type { Meta, StoryObj } from '@storybook/react';
import { PillarCard } from './PillarCard';

const meta: Meta<typeof PillarCard> = {
  title: 'Components/PillarCard',
  component: PillarCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PillarCard>;

export const Right: Story = {};

export const Left: Story = {
  args: {
    imagePosition: 'left',
    keyword: 'Engage',
    subtitle: 'Keep members coming back',
    description: 'Automated reminders, loyalty rewards, and personalized check-ins that build lasting habits.',
  },
};

export const StackedList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <PillarCard
        keyword="Manage"
        subtitle="Run your business from one place"
        description="Bookings, payments, memberships and staff scheduling, all in a single platform."
      />
      <PillarCard
        imagePosition="left"
        keyword="Engage"
        subtitle="Keep members coming back"
        description="Automated reminders, loyalty rewards, and personalized check-ins that build lasting habits."
      />
      <PillarCard
        keyword="Grow"
        subtitle="Expand with confidence"
        description="Multi-location support and reporting that scales with your business."
      />
    </div>
  ),
};
