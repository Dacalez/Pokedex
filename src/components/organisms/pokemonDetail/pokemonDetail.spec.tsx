import { render } from '@testing-library/react';
import { IMAGE_TYPE } from '../../../consts';
import { PokemonDetailModel } from '../../viewModel';
import { PokemonDetail } from './pokemonDetail';
import { POKEMON_DETAIL_MOCK_DATA } from '../../utils';

describe('pokemonDetail', () => {
  it('should render properly with the expected props', () => {
    const { getByText, container } = render(
      <PokemonDetail pokemonDetail={POKEMON_DETAIL_MOCK_DATA} />
    );
    expect(container.getElementsByClassName(IMAGE_TYPE.LARGE)[0]).toHaveAttribute(
      'src',
      POKEMON_DETAIL_MOCK_DATA.mainImage
    );
    expect(
      getByText(`#${POKEMON_DETAIL_MOCK_DATA.id} - ${POKEMON_DETAIL_MOCK_DATA.name}`)
    ).toBeInTheDocument();
    expect(
      getByText(`First appeareance in Pokemon ${POKEMON_DETAIL_MOCK_DATA.firstAppareance}`)
    ).toBeInTheDocument();
  });
  it('should render properly when some props are missing', () => {
    const pokemonDetailWithMissingProps: PokemonDetailModel = {
      ...POKEMON_DETAIL_MOCK_DATA,
      mainImage: '',
      spriteImage: './weedle-sprite.png',
      firstAppareance: null,
      moves: ''
    };
    const { getByText, container } = render(
      <PokemonDetail pokemonDetail={pokemonDetailWithMissingProps} />
    );
    expect(container.getElementsByClassName(IMAGE_TYPE.LARGE)[0]).toHaveAttribute(
      'src',
      pokemonDetailWithMissingProps.spriteImage
    );
    expect(getByText(`Event Pokemon`)).toBeInTheDocument();
    expect(
      getByText(`${pokemonDetailWithMissingProps.name} can't learn any move`)
    ).toBeInTheDocument();
  });
});
