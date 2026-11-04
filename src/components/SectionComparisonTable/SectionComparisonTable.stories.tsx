import type { Meta, StoryObj } from '@storybook/react';
import { SectionComparisonTable } from './SectionComparisonTable';

const meta: Meta<typeof SectionComparisonTable> = {
  title: 'Components/SectionComparisonTable',
  component: SectionComparisonTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionComparisonTable>;

export const Default: Story = {
  args: {
    headline: 'Run your entire fitness business',
    table: { featureHeading: 'Why Choose ABC Glofox?' },
  },
};
