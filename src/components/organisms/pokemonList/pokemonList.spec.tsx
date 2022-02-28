import { fireEvent, render } from '@testing-library/react';
import { PokemonList } from './pokemonList';
import { POKEMON_ARRAY_MOCK_DATA } from '../../utils';

const thumbnailImage: string = './pokeball.svg';
const handleOnClick: () => void = jest.fn();

describe('PokemonList', () => {
  it('should render properly', () => {
    const { container } = render(
      <PokemonList
        pokemonArray={POKEMON_ARRAY_MOCK_DATA}
        thumbnailImage={thumbnailImage}
        handleOnClick={handleOnClick}
      />
    );
    expect(container.getElementsByClassName('pokemon-list')[0].childNodes.length).toBe(2);
  });
  it('should call to the prop handleOnClic when the button is clicked', () => {
    const { getByText } = render(
      <PokemonList
        pokemonArray={POKEMON_ARRAY_MOCK_DATA}
        thumbnailImage={thumbnailImage}
        handleOnClick={handleOnClick}
      />
    );
    fireEvent.click(getByText(POKEMON_ARRAY_MOCK_DATA[0].name));
    expect(handleOnClick).toHaveBeenCalled();
  });
});
