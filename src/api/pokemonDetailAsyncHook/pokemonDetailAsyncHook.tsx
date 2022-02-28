import * as React from 'react';
import { PokemonDetailResponse } from '../apiModel';
import { PokemonDetailModel } from '../../model';
import { mapPokemonDetailResponseToPokemonDetail } from './pokemonDetailAsyncHook.mapper';

export const usePokemonDetailAsyncHook = (url: string): [PokemonDetailModel, boolean] => {
  const [pokemonDetail, setPokemonDetail] = React.useState<PokemonDetailModel>();
  const [loadingDetail, setLoadingDetail] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchPokemonDetail(url);
  }, [url]);

  const fetchPokemonDetail = async (url: string): Promise<void> => {
    try {
      if (url?.length > 0) {
        setLoadingDetail(true);
        const response: Response = await fetch(url);
        const jsonResponse: Promise<PokemonDetailResponse> = (await response).json();

        setPokemonDetail(mapPokemonDetailResponseToPokemonDetail(await jsonResponse));
      }
    } catch (error) {
      console.info(error);
    }
    setLoadingDetail(false);
  };

  return [pokemonDetail, loadingDetail];
};
