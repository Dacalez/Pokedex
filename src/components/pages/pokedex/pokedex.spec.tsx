import { fireEvent, render } from '@testing-library/react';
import { POKEMON_ARRAY_MOCK_DATA, POKEMON_DETAIL_MOCK_DATA } from '../../utils/mockData';
import { Pokedex } from './pokedex';

let mockPokemonArray = POKEMON_ARRAY_MOCK_DATA;
let mockPreviousUrl = 'previousURL';
let mockNextUrl = 'nextURL';
let mockLoadingPokemonArray = false;

let mockPokemonDetail = POKEMON_DETAIL_MOCK_DATA;
let mockLoadingPokemonDetail = false;

jest.mock('../../../api', () => ({
  usePokemonListAsyncHook: () => [
    mockPokemonArray,
    mockPreviousUrl,
    mockNextUrl,
    mockLoadingPokemonArray
  ],
  usePokemonDetailAsyncHook: () => [mockPokemonDetail, mockLoadingPokemonDetail]
}));

describe('Pokedex', () => {
  it('should render properly', async () => {
    const { container, getByText } = render(<Pokedex />);
    expect(container.querySelector('.pokemon-detail-modal')).not.toBeInTheDocument();
    expect(getByText(POKEMON_ARRAY_MOCK_DATA['0'].name)).toBeInTheDocument();
    expect(getByText('Previous')).toBeEnabled();
    expect(getByText('Next')).toBeEnabled();
  });
  it('should change the pages', () => {
    const { getByText } = render(<Pokedex />);
    mockPokemonArray = [
      {
        name: 'Pikachu',
        url: './pikachu'
      }
    ];
    fireEvent.click(getByText('Previous'));
    expect(getByText('Pikachu')).toBeInTheDocument();
    mockPokemonArray = POKEMON_ARRAY_MOCK_DATA;
    fireEvent.click(getByText('Next'));
    expect(getByText(POKEMON_ARRAY_MOCK_DATA[0].name)).toBeInTheDocument();
  });
  it('should disable buttons if there are no urls', async () => {
    mockPreviousUrl = null;
    mockNextUrl = null;
    const { getByText } = render(<Pokedex />);
    expect(getByText('Previous').parentElement).toBeDisabled();
    expect(getByText('Next').parentElement).toBeDisabled();
  });
  it('should open and close modal', async () => {
    mockPokemonDetail = POKEMON_DETAIL_MOCK_DATA;
    const { getByText, container } = render(<Pokedex />);
    fireEvent.click(getByText('Rattata'));
    expect(container.getElementsByClassName('pokemon-detail-modal')[0]).toBeInTheDocument();
    fireEvent.click(getByText('Back'));
    expect(container.getElementsByClassName('pokemon-detail-modal')[0]).toBeUndefined();
  });
});
