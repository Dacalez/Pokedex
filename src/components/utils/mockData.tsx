import { PokemonDetailModel, UrlElementDto } from '../viewModel';

export const POKEMON_ARRAY_MOCK_DATA: UrlElementDto[] = [
  { name: 'Rattata', url: 'http:www.pokeapi.com/rattata' },
  { name: 'Raticate', url: 'http:www.pokeapi.com/raticate' }
];

export const POKEMON_DETAIL_MOCK_DATA: PokemonDetailModel = {
  id: 13,
  name: 'Weedle',
  type: 'Bug-Poison',
  height: 3,
  weight: 32,
  moves: 'Poison-sting',
  mainImage: './weedle.png',
  spriteImage: '',
  firstAppareance: 'Red'
};
