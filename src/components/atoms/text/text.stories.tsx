import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Text, Props as TextProps } from './text';
import { TEXT_TYPE } from '../../../consts';

const defaultProps: TextProps = {
  content: 'This is a text',
  type: TEXT_TYPE.TEXT
};

const storyMetadata: Meta = {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    type: {
      options: TEXT_TYPE,
      control: {
        type: 'select'
      }
    }
  }
};

export default storyMetadata;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const TextType = Template.bind({});
TextType.args = { ...defaultProps };

export const LabelType = Template.bind({});
LabelType.args = { ...defaultProps, type: TEXT_TYPE.LABEL };

export const TitleType = Template.bind({});
TitleType.args = { ...defaultProps, type: TEXT_TYPE.TITLE };
