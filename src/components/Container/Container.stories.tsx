import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

// Story-level decoration only, to visualize the container's content-width
// box in Storybook — this background is NOT part of the real component.
const placeholderStyle: CSSProperties = {
  backgroundColor: '#efeef0',
  padding: '24px 0',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  fontSize: 13,
  color: '#5f5a69',
};

export const Wide: Story = {
  args: {
    width: 'wide',
    children: <div style={placeholderStyle}>Content — 1248px (wide-max 1280 − wide-padding 16×2)</div>,
  },
};

export const Narrow: Story = {
  args: {
    width: 'narrow',
    children: <div style={placeholderStyle}>Content — 760px (narrow-max, proposed)</div>,
  },
};
