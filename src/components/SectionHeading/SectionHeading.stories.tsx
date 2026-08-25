import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeading } from './SectionHeading';

const meta: Meta<typeof SectionHeading> = {
  title: 'Components/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Center: Story = {
  args: {
    align: 'center',
  },
};

export const Left: Story = {
  args: {
    align: 'left',
  },
};

export const Right: Story = {
  args: {
    align: 'right',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const LeftSmall: Story = {
  args: {
    align: 'left',
    size: 'small',
  },
};

export const RightLarge: Story = {
  args: {
    align: 'right',
    size: 'large',
  },
};
