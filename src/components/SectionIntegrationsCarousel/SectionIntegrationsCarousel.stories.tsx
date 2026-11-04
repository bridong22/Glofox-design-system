import type { Meta, StoryObj } from '@storybook/react';
import { SectionIntegrationsCarousel } from './SectionIntegrationsCarousel';

const meta: Meta<typeof SectionIntegrationsCarousel> = {
  title: 'Components/SectionIntegrationsCarousel',
  component: SectionIntegrationsCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionIntegrationsCarousel>;

export const Default: Story = {
  args: {
    logoCarousel: { perPage: 4 },
  },
};
