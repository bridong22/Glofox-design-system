import type { Meta, StoryObj } from '@storybook/react';
import { LogoBar } from './LogoBar';

const meta: Meta<typeof LogoBar> = {
  title: 'Components/LogoBar',
  component: LogoBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoBar>;

export const Default: Story = {
  args: {},
};

export const CustomBrands: Story = {
  args: {
    brands: ['Acme Fitness', 'Studio Co', 'Flex Gym'],
  },
};
