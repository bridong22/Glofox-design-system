import type { Meta, StoryObj } from '@storybook/react';
import { SectionImageAndItemsList } from './SectionImageAndItemsList';

const meta: Meta<typeof SectionImageAndItemsList> = {
  title: 'Components/SectionImageAndItemsList',
  component: SectionImageAndItemsList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionImageAndItemsList>;

export const ImageLeft: Story = {};

export const ImageRight: Story = {
  args: { imageAlign: 'right' },
};
