import type { Meta, StoryObj } from '@storybook/react';
import { LpFooter } from './LpFooter';

const meta: Meta<typeof LpFooter> = {
  title: 'Components/LpFooter',
  component: LpFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LpFooter>;

export const Desktop: Story = {};

export const Mobile: Story = {
  args: {
    breakpoint: 'mobile',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
