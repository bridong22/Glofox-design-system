import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGridCard } from './FeatureGridCard';

const meta: Meta<typeof FeatureGridCard> = {
  title: 'Components/FeatureGridCard',
  component: FeatureGridCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureGridCard>;

export const Default: Story = {};

export const NoSubheadingNoLink: Story = {
  args: {
    showSubheading: false,
    showLink: false,
  },
};
