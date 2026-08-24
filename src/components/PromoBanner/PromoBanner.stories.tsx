import type { Meta, StoryObj } from '@storybook/react';
import { PromoBanner } from './PromoBanner';

const meta: Meta<typeof PromoBanner> = {
  title: 'Components/PromoBanner',
  component: PromoBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PromoBanner>;

export const Default: Story = {
  args: {
    message: 'Book a demo today to boost your leads by 250%',
    ctaLabel: 'Demo and Pricing',
  },
};
