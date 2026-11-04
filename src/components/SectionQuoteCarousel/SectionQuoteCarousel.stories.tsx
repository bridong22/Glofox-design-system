import type { Meta, StoryObj } from '@storybook/react';
import { SectionQuoteCarousel } from './SectionQuoteCarousel';

const meta: Meta<typeof SectionQuoteCarousel> = {
  title: 'Components/SectionQuoteCarousel',
  component: SectionQuoteCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionQuoteCarousel>;

export const Default: Story = {};
