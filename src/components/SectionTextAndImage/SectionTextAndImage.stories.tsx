import type { Meta, StoryObj } from '@storybook/react';
import { SectionTextAndImage } from './SectionTextAndImage';

const meta: Meta<typeof SectionTextAndImage> = {
  title: 'Components/SectionTextAndImage',
  component: SectionTextAndImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionTextAndImage>;

export const Left: Story = {};

export const Center: Story = {
  args: { align: 'center' },
};

export const WithThirdRow: Story = {
  args: { showRow3: true },
};
