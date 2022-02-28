import { POKEMON_ARRAY_MOCK_DATA } from '../../components/utils/mockData';
import { PokemonListResponse } from '../apiModel';
import { renderHook, act } from '@testing-library/react-hooks';
import { usePokemonListAsyncHook } from './pokemonListAsyncHook';
import { POKEMON_LIST_ENDPOINT } from '../../consts';

const fetchResponse: PokemonListResponse = {
  results: POKEMON_ARRAY_MOCK_DATA,
  next: 'nextUrl',
  previous: 'previous',
  count: 151
};

describe('pokemonListAsync', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it('should return the proper values when fetching', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(fetchResponse));
    const { result, waitForNextUpdate } = renderHook(() =>
      usePokemonListAsyncHook(POKEMON_LIST_ENDPOINT)
    );
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current[0]).toStrictEqual(POKEMON_ARRAY_MOCK_DATA);
    expect(result.current[1]).toBe(fetchResponse.next);
    expect(result.current[2]).toBe(fetchResponse.previous);
    expect(result.current[3]).toBe(false);
  });
  it('should return the default values when error', async () => {
    fetchMock.mockResponseOnce(null);
    const { result, waitForNextUpdate } = renderHook(() =>
      usePokemonListAsyncHook(POKEMON_LIST_ENDPOINT)
    );
    await act(async () => {
      await waitForNextUpdate();
    });
    expect(result.current[0]).toStrictEqual([]);
    expect(result.current[1]).toBe('');
    expect(result.current[2]).toBe('');
    expect(result.current[3]).toBe(false);
  });
});
