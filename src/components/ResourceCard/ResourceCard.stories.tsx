import type { Meta, StoryObj } from '@storybook/react';
import { ResourceCard } from './ResourceCard';

const meta: Meta<typeof ResourceCard> = {
  title: 'Components/ResourceCard',
  component: ResourceCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResourceCard>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    imageUrl: 'https://picsum.photos/seed/glofox-resource/360/200',
    imageAlt: 'A gym floor with equipment',
  },
};

export const CustomContent: Story = {
  args: {
    category: 'Guides',
    title: 'How to Reduce No-Shows With Smart Booking Reminders',
    buttonLabel: 'Read the guide',
  },
};
