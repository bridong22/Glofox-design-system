import type { Meta, StoryObj } from '@storybook/react';
import { MidPostCtaCard } from './MidPostCtaCard';

const meta: Meta<typeof MidPostCtaCard> = {
  title: 'Components/MidPostCtaCard',
  component: MidPostCtaCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof MidPostCtaCard>;

export const Default: Story = {};

export const CustomCopy: Story = {
  args: {
    eyebrow: 'FOR CROSSFIT BOXES',
    body: 'See how ABC Glofox handles class caps, drop-ins, and recurring membership billing in one system.',
    ctaLabel: 'Book a Demo',
  },
};
