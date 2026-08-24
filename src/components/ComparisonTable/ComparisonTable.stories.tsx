import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable } from './ComparisonTable';

const meta: Meta<typeof ComparisonTable> = {
  title: 'Components/ComparisonTable',
  component: ComparisonTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonTable>;

export const Default: Story = {
  args: {
    columns: ['Feature', 'Glofox', 'Mindbody'],
    rows: [
      {
        label: 'Onboarding support',
        values: [
          { text: 'Dedicated onboarding specialist', highlighted: true },
          { text: 'Self-serve setup' },
        ],
      },
      {
        label: 'Branded member app',
        values: [
          { text: 'Included, white-labeled', highlighted: true },
          { text: 'Add-on, generic branding' },
        ],
      },
      {
        label: 'Pricing transparency',
        values: [
          { text: 'Published tiers', highlighted: true },
          { text: 'Sales-call-only pricing' },
        ],
      },
    ],
  },
};
