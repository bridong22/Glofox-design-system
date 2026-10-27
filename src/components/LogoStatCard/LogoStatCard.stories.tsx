import type { Meta, StoryObj } from '@storybook/react';
import { LogoStatCard } from './LogoStatCard';

const meta: Meta<typeof LogoStatCard> = {
  title: 'Components/LogoStatCard',
  component: LogoStatCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoStatCard>;

export const Default: Story = {};

export const CustomStat: Story = {
  args: {
    name: 'Spartans Boxing Club',
    metricLabel: 'Increase in member retention',
    metricValue: '+42%',
  },
};
