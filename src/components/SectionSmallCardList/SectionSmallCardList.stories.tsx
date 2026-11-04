import type { Meta, StoryObj } from '@storybook/react';
import { SectionSmallCardList } from './SectionSmallCardList';

const meta: Meta<typeof SectionSmallCardList> = {
  title: 'Components/SectionSmallCardList',
  component: SectionSmallCardList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionSmallCardList>;

export const Default: Story = {};
