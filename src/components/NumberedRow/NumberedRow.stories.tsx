import type { Meta, StoryObj } from '@storybook/react';
import { NumberedRow } from './NumberedRow';

const meta: Meta<typeof NumberedRow> = {
  title: 'Components/NumberedRow',
  component: NumberedRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberedRow>;

export const ImageRight: Story = {
  render: (args) => (
    <div style={{ width: '1280px' }}>
      <NumberedRow {...args} />
    </div>
  ),
};

export const ImageLeft: Story = {
  args: { step: 2, imageAlign: 'left' },
  render: (args) => (
    <div style={{ width: '1280px' }}>
      <NumberedRow {...args} />
    </div>
  ),
};
