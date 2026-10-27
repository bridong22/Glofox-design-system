import type { Meta, StoryObj } from '@storybook/react';
import { CustomerStoryCard } from './CustomerStoryCard';

const meta: Meta<typeof CustomerStoryCard> = {
  title: 'Components/CustomerStoryCard',
  component: CustomerStoryCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CustomerStoryCard>;

export const Default: Story = {};

export const RealExample: Story = {
  args: {
    headline: 'Spartans Boxing Club grew membership 30% year over year.',
    metricLabel: 'Increase in member retention',
    metricValue: '+42%',
  },
};

export const NoMetricNoLink: Story = {
  args: {
    showMetric: false,
    showLink: false,
  },
};
