import * as React from 'react';
import { PokemonListResponse } from '../apiModel';
import { UrlElementDto } from '../../model';

export const usePokemonListAsyncHook = (
  url: string
): [UrlElementDto[], string, string, boolean] => {
  const [pokemonArray, setPokemonArray] = React.useState<UrlElementDto[]>([]);
  const [nextPageUrl, setNextPageUrl] = React.useState<string>('');
  const [previousPageUrl, setPreviousPageUrl] = React.useState<string>('');
  const [loadingList, setLoadingList] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchPokemonList(url);
  }, [url]);

  const fetchPokemonList = async (url: string): Promise<void> => {
    try {
      setLoadingList(true);
      const response: Response = await fetch(url);
      const jsonResponse: Promise<PokemonListResponse> = (await response).json();

      setPokemonArray((await jsonResponse).results);
      setNextPageUrl((await jsonResponse).next);
      setPreviousPageUrl((await jsonResponse).previous);
    } catch (error) {
      console.info(error);
    }
    setLoadingList(false);
  };

  return [pokemonArray, nextPageUrl, previousPageUrl, loadingList];
};
