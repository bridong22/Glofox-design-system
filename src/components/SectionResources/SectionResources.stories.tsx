import type { Meta, StoryObj } from '@storybook/react';
import { SectionResources } from './SectionResources';

const meta: Meta<typeof SectionResources> = {
  title: 'Components/SectionResources',
  component: SectionResources,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionResources>;

export const Default: Story = {};

export const Centered: Story = {
  args: {
    layout: 'centered',
  },
};

export const NoFilters: Story = {
  args: {
    showFilters: false,
  },
};
