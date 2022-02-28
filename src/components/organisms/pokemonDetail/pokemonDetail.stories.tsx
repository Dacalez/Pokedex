import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PokemonDetail, Props as PokemonDetailProps } from './pokemonDetail';
import { POKEMON_DETAIL_MOCK_DATA } from '../../utils';

const defaultProps: PokemonDetailProps = {
  pokemonDetail: POKEMON_DETAIL_MOCK_DATA
};

const storyMetadata: Meta = {
  title: 'Organisms/PokemonDetail',
  component: PokemonDetail
};

export default storyMetadata;

const Template: Story<PokemonDetailProps> = (args) => <PokemonDetail {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultProps };
