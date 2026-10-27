import type { Meta, StoryObj } from '@storybook/react';
import { PersonCard } from './PersonCard';

const meta: Meta<typeof PersonCard> = {
  title: 'Components/PersonCard',
  component: PersonCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PersonCard>;

export const Default: Story = {};

export const CustomerSuccessManager: Story = {
  args: {
    name: 'Alex Rivera',
    role: 'Customer Success Manager, Glofox',
    intro: 'Here to help you get the most out of your account.',
    linkLabel: 'Book a call',
  },
};

export const NoIntroNoLink: Story = {
  args: {
    showIntro: false,
    showLink: false,
  },
};
