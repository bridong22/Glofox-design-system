import type { Meta, StoryObj } from '@storybook/react';
import { MediaVideo } from './MediaVideo';

const meta: Meta<typeof MediaVideo> = {
  title: 'Components/MediaVideo',
  component: MediaVideo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MediaVideo>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: '640px', height: '360px' }}>
      <MediaVideo {...args} />
    </div>
  ),
};
