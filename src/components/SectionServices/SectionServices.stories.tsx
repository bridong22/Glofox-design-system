import type { Meta, StoryObj } from '@storybook/react';
import { SectionServices } from './SectionServices';

const meta: Meta<typeof SectionServices> = {
  title: 'Components/SectionServices',
  component: SectionServices,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionServices>;

export const Default: Story = {};
