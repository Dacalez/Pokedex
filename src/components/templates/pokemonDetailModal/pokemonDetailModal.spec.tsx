import { fireEvent, render } from '@testing-library/react';
import { IMAGE_TYPE } from '../../../consts';
import { POKEMON_DETAIL_MOCK_DATA } from '../../utils';
import { PokemonDetailModal } from './pokemonDetailModal';

const handleOnClick = jest.fn();

describe('pokemonDetailModal', () => {
  it('should render properly', () => {
    const { getByText, container } = render(
      <PokemonDetailModal
        pokemonDetail={POKEMON_DETAIL_MOCK_DATA}
        handleOnCloseModal={handleOnClick}
      />
    );
    expect(container.getElementsByClassName(IMAGE_TYPE.LARGE)[0]).toHaveAttribute(
      'src',
      POKEMON_DETAIL_MOCK_DATA.mainImage
    );
    expect(getByText(POKEMON_DETAIL_MOCK_DATA.type)).toBeInTheDocument();
  });
  it('should call handleOnClick function when button is clicked', () => {
    const { getByText } = render(
      <PokemonDetailModal
        pokemonDetail={POKEMON_DETAIL_MOCK_DATA}
        handleOnCloseModal={handleOnClick}
      />
    );
    fireEvent.click(getByText('Back'));
    expect(handleOnClick).toHaveBeenCalled();
  });
});
