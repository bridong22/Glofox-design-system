import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedModuleRow } from './FeaturedModuleRow';

const meta: Meta<typeof FeaturedModuleRow> = {
  title: 'Components/FeaturedModuleRow',
  component: FeaturedModuleRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedModuleRow>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    imageUrl: 'https://picsum.photos/seed/glofox-featured/750/422',
    imageAlt: 'A gym floor with equipment',
  },
};

export const CustomContent: Story = {
  args: {
    badgeLabel: 'Editor’s Pick',
    title: 'How to Reduce No-Shows With Smart Booking Reminders',
    description:
      'A practical playbook for cutting last-minute cancellations with automated reminders, waitlists, and smarter scheduling rules.',
    buttonLabel: 'Read the guide',
  },
};
