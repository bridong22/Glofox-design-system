import type { Meta, StoryObj } from '@storybook/react';
import { SectionFaq } from './SectionFaq';

const meta: Meta<typeof SectionFaq> = {
  title: 'Components/SectionFaq',
  component: SectionFaq,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionFaq>;

export const OutlineOneColumn: Story = {};

export const OutlineTwoColumns: Story = {
  args: { columns: 2 },
};

export const SolidOneColumn: Story = {
  args: { style: 'solid' },
};

export const SolidTwoColumns: Story = {
  args: { style: 'solid', columns: 2 },
};
