import type { Meta, StoryObj } from '@storybook/react';
import { SectionNumberedRows } from './SectionNumberedRows';

const meta: Meta<typeof SectionNumberedRows> = {
  title: 'Components/SectionNumberedRows',
  component: SectionNumberedRows,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionNumberedRows>;

export const Default: Story = {};
