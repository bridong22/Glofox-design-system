import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ResourcesHero } from './ResourcesHero';

const meta: Meta<typeof ResourcesHero> = {
  title: 'Components/ResourcesHero',
  component: ResourcesHero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResourcesHero>;

const tabs = ['All', 'Blog', 'Customer Stories', 'Podcasts', 'E-books'];

export const Default: Story = {
  args: {
    tabs,
    activeTab: 'All',
  },
};

export const Interactive: Story = {
  render: () => {
    function InteractiveResourcesHero() {
      const [activeTab, setActiveTab] = useState('All');
      return <ResourcesHero tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />;
    }
    return <InteractiveResourcesHero />;
  },
};
