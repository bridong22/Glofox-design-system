import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {};

export const MinimalColumns: Story = {
  args: {
    columns: [
      {
        heading: 'Product',
        links: [
          { label: 'Features', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Us', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
  },
};
