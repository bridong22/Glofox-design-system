import type { Meta, StoryObj } from '@storybook/react';
import { SectionLargeCardList } from './SectionLargeCardList';

const meta: Meta<typeof SectionLargeCardList> = {
  title: 'Components/SectionLargeCardList',
  component: SectionLargeCardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionLargeCardList>;

export const Default: Story = {};
