import type { Meta, StoryObj } from '@storybook/react';
import { SectionTabbedSection } from './SectionTabbedSection';

const meta: Meta<typeof SectionTabbedSection> = {
  title: 'Components/SectionTabbedSection',
  component: SectionTabbedSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionTabbedSection>;

export const Default: Story = {};
