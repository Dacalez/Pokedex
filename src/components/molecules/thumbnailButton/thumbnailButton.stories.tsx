import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThumbnailButton, Props as ThumbnailButtonProps } from './thumbnailButton';
import { POKEBALL_PNG_SRC } from '../../../consts';

const defaultProps: ThumbnailButtonProps = {
  text: 'Meowth',
  thumbnailSource: POKEBALL_PNG_SRC,
  handleOnClick: () => console.log('I was click')
};

const storyMetadata: Meta = {
  title: 'Molecules/ThumbnailButton',
  component: ThumbnailButton
};

export default storyMetadata;

const Template: Story<ThumbnailButtonProps> = (args) => <ThumbnailButton {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
