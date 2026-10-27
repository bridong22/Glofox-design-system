import type { Meta, StoryObj } from '@storybook/react';
import { StatStrip } from './StatStrip';

const meta: Meta<typeof StatStrip> = {
  title: 'Components/StatStrip',
  component: StatStrip,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof StatStrip>;

export const Default: Story = {};

export const CustomStats: Story = {
  args: {
    stats: [
      { value: '10+', label: 'Years in business' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
  },
};

export const WithPrefixAndDescription: Story = {
  args: {
    stats: [
      {
        prefix: 'up to',
        value: '97%+',
        label: 'Collection Rates',
        description: 'Automated billing and payment recovery keep revenue on track.',
      },
    ],
  },
};
