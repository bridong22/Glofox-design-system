import type { Meta, StoryObj } from '@storybook/react';
import { ReviewTag } from './ReviewTag';

const meta: Meta<typeof ReviewTag> = {
  title: 'Components/ReviewTag',
  component: ReviewTag,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ReviewTag>;

export const Dark: Story = {
  args: {
    mode: 'dark',
    rating: 4.5,
    reviewCount: 465,
  },
};

export const Light: Story = {
  args: {
    mode: 'light',
    rating: 4.5,
    reviewCount: 465,
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
};

export const PerfectRating: Story = {
  args: {
    mode: 'light',
    rating: 5,
    reviewCount: 1024,
  },
};

export const LowerRating: Story = {
  args: {
    mode: 'light',
    rating: 3.5,
    reviewCount: 128,
  },
};
