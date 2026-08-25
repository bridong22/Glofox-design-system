import type { Meta, StoryObj } from '@storybook/react';
import { TocSidebar } from './TocSidebar';

const meta: Meta<typeof TocSidebar> = {
  title: 'Components/TocSidebar',
  component: TocSidebar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TocSidebar>;

export const Default: Story = {};

export const WithSubmitHandler: Story = {
  args: {
    onSubmit: (email: string) => alert(`Subscribed: ${email}`),
  },
};

export const CustomItems: Story = {
  args: {
    title: 'On this page',
    items: [
      { label: 'Overview', href: '#overview' },
      { label: 'Pricing breakdown', href: '#pricing' },
      { label: 'Next steps', href: '#next-steps' },
    ],
  },
};
