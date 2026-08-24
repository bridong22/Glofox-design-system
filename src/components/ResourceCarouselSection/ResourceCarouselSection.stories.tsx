import type { Meta, StoryObj } from '@storybook/react';
import { ResourceCarouselSection } from './ResourceCarouselSection';

const meta: Meta<typeof ResourceCarouselSection> = {
  title: 'Components/ResourceCarouselSection',
  component: ResourceCarouselSection,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResourceCarouselSection>;

const cards = [
  { title: 'Phil Graham: The Magic of a Growth Mindset', category: 'Podcast', href: '#' },
  { title: 'Phil Graham: The Magic of a Growth Mindset', category: 'Podcast', href: '#' },
  { title: 'Phil Graham: The Magic of a Growth Mindset', category: 'Podcast', href: '#' },
  { title: 'Phil Graham: The Magic of a Growth Mindset', category: 'Podcast', href: '#' },
  { title: 'Phil Graham: The Magic of a Growth Mindset', category: 'Podcast', href: '#' },
];

export const Default: Story = {
  args: {
    title: 'Podcasts',
    linkLabel: 'See All',
    href: '#',
    cards,
  },
};
