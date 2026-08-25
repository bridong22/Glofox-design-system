import type { Meta, StoryObj } from '@storybook/react';
import { NewsletterCapture } from './NewsletterCapture';

const meta: Meta<typeof NewsletterCapture> = {
  title: 'Components/NewsletterCapture',
  component: NewsletterCapture,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof NewsletterCapture>;

export const Default: Story = {};

export const WithSubmitHandler: Story = {
  args: {
    onSubmit: (email: string) => alert(`Subscribed: ${email}`),
  },
};

export const CustomCopy: Story = {
  args: {
    title: 'The Weekly Rep Count',
    subtitle: 'Fresh studio operations tips every Friday.',
    ctaLabel: 'Sign Me Up',
  },
};
