import { fireEvent, render } from '@testing-library/react';
import { POKEMON_ARRAY_MOCK_DATA } from '../../utils/mockData';
import { PokemonSelection } from './pokemonSelection';

const handleOnNavButtons: (isNextButton: boolean) => void = jest.fn();
const handleOnPokemonClick: (url: string) => void = jest.fn();

describe('PokemonSelection', () => {
  it('should render properly', () => {
    const { getByText } = render(
      <PokemonSelection
        pokemonArray={POKEMON_ARRAY_MOCK_DATA}
        disableNextButton={true}
        disablePrevButton={true}
        handleOnPokemonClick={handleOnPokemonClick}
        handleOnNavButtons={handleOnNavButtons}
      />
    );
    expect(getByText('Pokedex')).toBeInTheDocument();
    expect(getByText('Click on a pokemon to see its detail')).toBeInTheDocument();
    expect(getByText(POKEMON_ARRAY_MOCK_DATA[0].name)).toBeInTheDocument();
    expect(getByText('Previous')).toBeEnabled();
    expect(getByText('Next')).toBeEnabled();
  });
  it('should call to the pokemon click function', () => {
    const { getByText } = render(
      <PokemonSelection
        pokemonArray={POKEMON_ARRAY_MOCK_DATA}
        disableNextButton={true}
        disablePrevButton={true}
        handleOnPokemonClick={handleOnPokemonClick}
        handleOnNavButtons={handleOnNavButtons}
      />
    );
    fireEvent.click(getByText(POKEMON_ARRAY_MOCK_DATA[0].name));
    expect(handleOnPokemonClick).toHaveBeenCalled();
  });
  it('should call to the navigation click function', () => {
    const { getByText } = render(
      <PokemonSelection
        pokemonArray={POKEMON_ARRAY_MOCK_DATA}
        disableNextButton={false}
        disablePrevButton={false}
        handleOnPokemonClick={handleOnPokemonClick}
        handleOnNavButtons={handleOnNavButtons}
      />
    );

    fireEvent.click(getByText('Previous'));
    fireEvent.click(getByText('Next'));

    expect(handleOnNavButtons).toHaveBeenCalledWith(false);
    expect(handleOnNavButtons).toHaveBeenCalledWith(true);
    expect(handleOnNavButtons).toHaveBeenCalledTimes(2);
  });
});
