import type { Meta, StoryObj } from '@storybook/react';
import { MediaTextRow } from './MediaTextRow';

const meta: Meta<typeof MediaTextRow> = {
  title: 'Components/MediaTextRow',
  component: MediaTextRow,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MediaTextRow>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '1280px' }}>
      <MediaTextRow {...args} />
    </div>
  ),
};

export const ImageLeftWithChecklist: Story = {
  args: { imageAlign: 'left', showList: true },
  render: (args) => (
    <div style={{ width: '1280px' }}>
      <MediaTextRow {...args} />
    </div>
  ),
};

export const CenterAligned: Story = {
  args: { align: 'center' },
  render: (args) => (
    <div style={{ width: '1280px' }}>
      <MediaTextRow {...args} />
    </div>
  ),
};
