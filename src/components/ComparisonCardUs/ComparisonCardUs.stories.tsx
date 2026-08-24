import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonCardUs } from './ComparisonCardUs';

const meta: Meta<typeof ComparisonCardUs> = {
  title: 'Components/ComparisonCardUs',
  component: ComparisonCardUs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonCardUs>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: 'Glofox',
    description: 'All-in-one platform with no third-party redirects, ever.',
  },
};
