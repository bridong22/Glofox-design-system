import type { Meta, StoryObj } from '@storybook/react';
import { LinkArrow } from './LinkArrow';

const meta: Meta<typeof LinkArrow> = {
  title: 'Components/LinkArrow',
  component: LinkArrow,
  tags: ['autodocs'],
  args: {
    href: '#',
    children: 'See All',
  },
};

export default meta;
type Story = StoryObj<typeof LinkArrow>;

export const Default: Story = {};

export const ViewMore: Story = {
  args: {
    children: 'View More',
  },
};
