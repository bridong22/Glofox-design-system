import type { Meta, StoryObj } from '@storybook/react';
import { SectionFeaturesTabs } from './SectionFeaturesTabs';

const meta: Meta<typeof SectionFeaturesTabs> = {
  title: 'Components/SectionFeaturesTabs',
  component: SectionFeaturesTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionFeaturesTabs>;

export const Image: Story = {};

export const Video: Story = {
  args: { media: 'video' },
};
