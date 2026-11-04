import type { Meta, StoryObj } from '@storybook/react';
import { SectionFeatureGrid } from './SectionFeatureGrid';

const meta: Meta<typeof SectionFeatureGrid> = {
  title: 'Components/SectionFeatureGrid',
  component: SectionFeatureGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionFeatureGrid>;

export const Default: Story = {};

export const OneRow: Story = {
  args: {
    showRow2: false,
  },
};
