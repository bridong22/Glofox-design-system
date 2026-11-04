import type { Meta, StoryObj } from '@storybook/react';
import { SectionAccordionMedia } from './SectionAccordionMedia';

const meta: Meta<typeof SectionAccordionMedia> = {
  title: 'Components/SectionAccordionMedia',
  component: SectionAccordionMedia,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionAccordionMedia>;

export const ImageRight: Story = {};

export const ImageLeft: Story = {
  args: { imageAlign: 'left' },
};
