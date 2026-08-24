import type { Meta, StoryObj } from '@storybook/react';
import { SectionHeaderWithLink } from './SectionHeaderWithLink';

const meta: Meta<typeof SectionHeaderWithLink> = {
  title: 'Components/SectionHeaderWithLink',
  component: SectionHeaderWithLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 700 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SectionHeaderWithLink>;

export const Default: Story = {
  args: {
    title: 'Blog',
  },
};

export const CustomLink: Story = {
  args: {
    title: 'Customer Stories',
    linkLabel: 'View More',
    href: '/customer-stories',
  },
};
