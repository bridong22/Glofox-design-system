import type { Meta, StoryObj } from '@storybook/react';
import { TermEntry } from './TermEntry';

const meta: Meta<typeof TermEntry> = {
  title: 'Components/TermEntry',
  component: TermEntry,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TermEntry>;

export const Default: Story = {};

export const ChurnRate: Story = {
  args: {
    term: 'Churn Rate',
    definition: 'The percentage of members who cancel their membership within a given period, usually measured monthly.',
  },
};
