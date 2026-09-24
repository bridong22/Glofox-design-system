import type { Meta, StoryObj } from '@storybook/react';
import { FeatureListItem } from './FeatureListItem';

const meta: Meta<typeof FeatureListItem> = {
  title: 'Components/FeatureListItem',
  component: FeatureListItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureListItem>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    iconName: 'users',
    title: 'Multi-location support',
    description: 'Manage staff, schedules and members across every site.',
  },
};
