import type { Meta, StoryObj } from '@storybook/react';
import { SectionEmbed } from './SectionEmbed';

const meta: Meta<typeof SectionEmbed> = {
  title: 'Components/SectionEmbed',
  component: SectionEmbed,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionEmbed>;

export const Contained169: Story = {};

export const Wide43: Story = {
  args: { width: 'wide', aspect: '4:3' },
};

export const Full11: Story = {
  args: { width: 'full', aspect: '1:1' },
};
