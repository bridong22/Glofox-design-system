import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {};

export const CustomCopy: Story = {
  args: {
    smallTitle: 'BOOKINGS, PAYMENTS & MEMBERS',
    headline: 'Run your studio from one platform',
    subheadline: 'Everything you need to manage classes, memberships, and payments in one place.',
  },
};

export const WithSubmitHandler: Story = {
  args: {
    onSubmit: (email: string) => alert(`Submitted: ${email}`),
  },
};
