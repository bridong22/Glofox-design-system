import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCarouselCard } from './TestimonialCarouselCard';

const meta: Meta<typeof TestimonialCarouselCard> = {
  title: 'Components/TestimonialCarouselCard',
  component: TestimonialCarouselCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCarouselCard>;

export const Default: Story = {};

export const NoLogoMarquee: Story = {
  args: {
    showLogoMarquee: false,
  },
};

export const CardCarouselOnly: Story = {
  args: {
    showHeader: false,
    showLogoMarquee: false,
  },
};
