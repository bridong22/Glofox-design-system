import type { Meta, StoryObj } from '@storybook/react';
import { FeatureListCard } from './FeatureListCard';

const meta: Meta<typeof FeatureListCard> = {
  title: 'Components/FeatureListCard',
  component: FeatureListCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FeatureListCard>;

export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    iconName: 'shield',
    title: 'Secure by design',
    description: 'Role-based access, audit trails, and encrypted payments keep every studio protected.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'A longer feature headline that spans across two lines of text',
    description:
      'A much longer supporting description used to verify the card grows to accommodate additional copy while keeping its layout intact.',
  },
};
