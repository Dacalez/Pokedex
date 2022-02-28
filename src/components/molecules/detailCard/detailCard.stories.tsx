import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DetailCard, Props as DetailCardProps } from './detailCard';

const defaultProps: DetailCardProps = {
  title: 'Meowth',
  labeledDetails: {
    type: 'Normal',
    weight: '3',
    height: '3'
  },
  bottomText: 'This is the Bottom text'
};

const storyMetadata: Meta = {
  title: 'Molecules/DetailCard',
  component: DetailCard
};

export default storyMetadata;

const Template: Story<DetailCardProps> = (args) => <DetailCard {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
