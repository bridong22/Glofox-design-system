import type { Meta, StoryObj } from '@storybook/react';
import { SectionComparisonColumns } from './SectionComparisonColumns';

const meta: Meta<typeof SectionComparisonColumns> = {
  title: 'Components/SectionComparisonColumns',
  component: SectionComparisonColumns,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionComparisonColumns>;

export const Default: Story = {};

export const WithThirdColumn: Story = {
  args: { showColumn3: true },
};
