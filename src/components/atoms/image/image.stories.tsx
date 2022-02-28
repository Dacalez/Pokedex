import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Image, Props as ImageProps } from './image';
import { IMAGE_TYPE } from '../../../consts';

const defaultProps: ImageProps = {
  source:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
  type: IMAGE_TYPE.THUMBNAIL
};

const storyMetadata: Meta = {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    type: {
      options: IMAGE_TYPE,
      control: {
        type: 'select'
      }
    }
  }
};

export default storyMetadata;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Thumbnail = Template.bind({});
Thumbnail.args = { ...defaultProps };

export const Large = Template.bind({});
Large.args = { ...defaultProps, type: IMAGE_TYPE.LARGE };
