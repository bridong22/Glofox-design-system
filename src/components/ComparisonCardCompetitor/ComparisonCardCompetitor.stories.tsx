import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonCardCompetitor } from './ComparisonCardCompetitor';

const meta: Meta<typeof ComparisonCardCompetitor> = {
  title: 'Components/ComparisonCardCompetitor',
  component: ComparisonCardCompetitor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonCardCompetitor>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: 'Mindbody',
    description: 'Members are bounced to a separate consumer app to book and pay.',
  },
};
