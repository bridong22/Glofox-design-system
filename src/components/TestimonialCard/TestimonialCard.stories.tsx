import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {};

export const WithAvatarImage: Story = {
  args: {
    authorAvatarUrl: 'https://i.pravatar.cc/56?u=russ-harrison',
  },
};

export const CustomContent: Story = {
  args: {
    quote: '"Booking and payments finally run themselves. Our front desk got 10 hours a week back."',
    authorName: 'Komo Studio',
    authorRole: 'Owner, Komo Yoga',
    authorInitials: 'KS',
  },
};
