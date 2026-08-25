import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonCard } from './ComparisonCard';

const meta: Meta<typeof ComparisonCard> = {
  title: 'Components/ComparisonCard',
  component: ComparisonCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonCard>;

export const Large: Story = {
  args: {
    type: 'large',
  },
};

export const Small: Story = {
  args: {
    type: 'small',
  },
};

export const LargeCustomContent: Story = {
  args: {
    type: 'large',
    title: 'Glofox',
    description: 'All-in-one platform with no third-party redirects, ever.',
  },
};

export const SmallCustomContent: Story = {
  args: {
    type: 'small',
    title: 'Trusted by 4,000+ fitness studios worldwide',
    linkLabel: 'Read More',
  },
};
