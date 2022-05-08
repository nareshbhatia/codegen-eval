import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story = (args) => (
  <Avatar name={args.name} photo={args.photo} />
);

export const AvatarStory = Template.bind({});
AvatarStory.storyName = 'Avatar';
AvatarStory.args = {
  name: 'Paul Silva',
  photo:
    'https://images.unsplash.com/photo-1568585105565-e372998a195d?w=256&h=256&fit=crop&crop=entropy',
};
