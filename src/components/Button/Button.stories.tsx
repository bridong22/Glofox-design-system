import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Get Free Demo',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'small',
    children: 'Get Free Demo',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'small',
    children: 'Get Free Demo',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Get Free Demo',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Get Free Demo',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Get Free Demo',
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['primary', 'outline', 'ghost'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {(['small', 'medium', 'large'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              Get Free Demo
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
