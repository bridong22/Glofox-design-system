import type { Meta, StoryObj } from '@storybook/react';
import { MostPopularBanner } from './MostPopularBanner';

const meta: Meta<typeof MostPopularBanner> = {
  title: 'Components/MostPopularBanner',
  component: MostPopularBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof MostPopularBanner>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 268 }}>
      <MostPopularBanner {...args} />
    </div>
  ),
};

export const BestValue: Story = {
  args: { label: 'BEST VALUE' },
  render: (args) => (
    <div style={{ width: 268 }}>
      <MostPopularBanner {...args} />
    </div>
  ),
};
