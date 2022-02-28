import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PokemonList, Props as PokemonListProps } from './pokemonList';
import { POKEMON_ARRAY_MOCK_DATA } from '../../utils';
import { POKEBALL_PNG_SRC } from '../../../consts';

const defaultProps: PokemonListProps = {
  pokemonArray: POKEMON_ARRAY_MOCK_DATA,
  thumbnailImage: POKEBALL_PNG_SRC,
  handleOnClick: () => console.log('I was clicked')
};

const storyMetadata: Meta = {
  title: 'Organisms/PokemonList',
  component: PokemonList
};

export default storyMetadata;

const Template: Story<PokemonListProps> = (args) => <PokemonList {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
