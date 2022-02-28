import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PokemonSelection, Props as PokemonSelectionProps } from './pokemonSelection';
import { POKEMON_ARRAY_MOCK_DATA } from '../../utils';

const defaultFunction: () => void = () => console.log('I was clicked');

const defaultProps: PokemonSelectionProps = {
  pokemonArray: POKEMON_ARRAY_MOCK_DATA,
  disablePrevButton: false,
  disableNextButton: false,
  handleOnPokemonClick: defaultFunction,
  handleOnNavButtons: defaultFunction
};

const storyMetadata: Meta = {
  title: 'Templates/PokemonSelection',
  component: PokemonSelection
};

export default storyMetadata;

const Template: Story<PokemonSelectionProps> = (args) => <PokemonSelection {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
