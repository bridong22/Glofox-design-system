import type { Meta, StoryObj } from '@storybook/react';
import { CardCarousel } from './CardCarousel';
import { ResourceCard } from '../ResourceCard';

const meta: Meta<typeof CardCarousel> = {
  title: 'Components/CardCarousel',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardCarousel>;

const ITEMS = Array.from({ length: 6 }, (_, index) => ({ title: `Resource ${index + 1}` }));

export const Default: Story = {
  render: () => (
    <CardCarousel
      items={ITEMS}
      perPage={3}
      renderItem={(item) => <ResourceCard key={item.title} title={item.title} showEyebrow={false} />}
    />
  ),
};
