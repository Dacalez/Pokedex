import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props as ButtonProps } from './button';

const defaultProps: ButtonProps = {
  content: <span>Default</span>,
  handleOnClick: () => console.log('I was clicked'),
  disabled: false
};

const storyMetadata: Meta = {
  title: 'Atoms/Button',
  component: Button
};

export default storyMetadata;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultProps, content: <span>Disabled</span>, disabled: true };
