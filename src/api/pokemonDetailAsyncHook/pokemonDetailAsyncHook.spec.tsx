import { PokemonDetailResponse } from '../apiModel';
import { renderHook, act } from '@testing-library/react-hooks';
import { usePokemonDetailAsyncHook } from './pokemonDetailAsyncHook';
import { PokemonDetailModel } from '../../model';

const fetchResponse: PokemonDetailResponse = {
  abilities: [],
  base_experience: 39,
  game_indices: [
    {
      game_index: 123,
      version: {
        name: 'red',
        url: 'https://pokeapi.co/api/v2/version/1/'
      }
    }
  ],
  height: 3,
  held_items: [],
  id: 10,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/10/encounters',
  moves: [
    {
      move: {
        name: 'tackle',
        url: 'https://pokeapi.co/api/v2/move/33/'
      },
      version_group_details: []
    }
  ],
  name: 'caterpie',
  order: 14,
  past_types: [],
  species: null,
  sprites: {
    front_default:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
    other: {
      home: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png'
      }
    }
  },
  stats: [],
  types: [
    {
      slot: 1,
      type: {
        name: 'bug',
        url: 'https://pokeapi.co/api/v2/type/7/'
      }
    }
  ],
  weight: 29
};

const expectedPokemonDetail: PokemonDetailModel = {
  id: fetchResponse.id,
  name: fetchResponse.name,
  type: 'bug',
  height: fetchResponse.height,
  weight: fetchResponse.weight,
  moves: 'tackle',
  mainImage: fetchResponse.sprites.other['home'].front_default,
  spriteImage: fetchResponse.sprites.front_default.toString(),
  firstAppareance: 'red'
};

describe('pokemonDetailAsyncHook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it('should return the proper values when fetching', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(fetchResponse));
    const { result, waitForNextUpdate } = renderHook(() => usePokemonDetailAsyncHook('./caterpie'));
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current[0]).toStrictEqual(expectedPokemonDetail);
    expect(result.current[1]).toBe(false);
  });
  it('should return the default values when error', async () => {
    fetchMock.mockResponseOnce(null);
    const { result, waitForNextUpdate } = renderHook(() => usePokemonDetailAsyncHook('./caterpie'));
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current[0]).toBeUndefined();
    expect(result.current[1]).toBe(false);
  });
});
