import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ScrollIndicator } from './ScrollIndicator';

const meta: Meta<typeof ScrollIndicator> = {
  title: 'Components/ScrollIndicator',
  component: ScrollIndicator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScrollIndicator>;

export const Dash: Story = {
  args: {
    count: 5,
    active: 2,
    style: 'dash',
  },
};

export const Dot: Story = {
  args: {
    count: 5,
    active: 3,
    style: 'dot',
  },
};

export const WithCountLabel: Story = {
  args: {
    count: 6,
    active: 1,
    style: 'dash',
    showCountLabel: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const count = 5;
    const [active, setActive] = useState(1);
    return <ScrollIndicator count={count} active={active} onSelect={setActive} showCountLabel />;
  },
};
