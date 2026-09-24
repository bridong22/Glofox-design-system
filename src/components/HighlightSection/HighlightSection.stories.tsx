import type { Meta, StoryObj } from '@storybook/react';
import { HighlightSection } from './HighlightSection';

const meta: Meta<typeof HighlightSection> = {
  title: 'Components/HighlightSection',
  component: HighlightSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof HighlightSection>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <HighlightSection {...args} />
    </div>
  ),
};
