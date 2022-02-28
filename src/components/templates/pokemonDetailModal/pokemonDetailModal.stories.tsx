import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PokemonDetailModal, Props as PokemonDetailModalProps } from './pokemonDetailModal';
import { POKEMON_DETAIL_MOCK_DATA } from '../../utils';

const defaultProps: PokemonDetailModalProps = {
  pokemonDetail: POKEMON_DETAIL_MOCK_DATA,
  handleOnCloseModal: () => console.log('I was clicked')
};

const storyMetadata: Meta = {
  title: 'Templates/PokemonDetailModal',
  component: PokemonDetailModal
};

export default storyMetadata;

const Template: Story<PokemonDetailModalProps> = (args) => <PokemonDetailModal {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
