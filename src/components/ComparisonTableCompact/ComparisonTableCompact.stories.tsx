import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTableCompact } from './ComparisonTableCompact';

const meta: Meta<typeof ComparisonTableCompact> = {
  title: 'Components/ComparisonTableCompact',
  component: ComparisonTableCompact,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonTableCompact>;

export const Default: Story = {
  args: {
    featureHeading: 'Why Choose ABC Glofox?',
  },
};

export const TwoCompetitors: Story = {
  args: {
    featureHeading: 'Why Choose ABC Glofox?',
    competitorNames: ['Mindbody', 'Mariana Tek'],
    rows: [
      { label: 'Flat pricing. One low monthly price', featured: true, competitors: [false, false] },
      { label: 'Modern, user-friendly interface', featured: true, competitors: [false, true] },
      { label: 'Aligned with small business goals', featured: true, competitors: [true, false] },
    ],
  },
};
