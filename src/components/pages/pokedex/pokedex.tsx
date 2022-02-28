import * as React from 'react';
import { PokemonSelection, PokemonDetailModal } from '../../templates';
import { usePokemonDetailAsyncHook, usePokemonListAsyncHook } from '../../../api';
import { POKEMON_LIST_ENDPOINT } from '../../../consts';

export const Pokedex = () => {
  const [pageEndpoint, setPageEndpoint] = React.useState<string>(POKEMON_LIST_ENDPOINT);
  const [pokemonSelectedUrl, setPokemonSelectedUrl] = React.useState<string>();
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [pokemonArray, nextPageUrl, previousPageUrl, loadingList] =
    usePokemonListAsyncHook(pageEndpoint);
  const [pokemonDetail, loadingDetail] = usePokemonDetailAsyncHook(pokemonSelectedUrl);

  const handleOnClickNavButtons = (isNextButton: boolean): void => {
    if (!loadingList) {
      setPageEndpoint(isNextButton ? nextPageUrl : previousPageUrl);
    }
  };

  const handleOnClickPokemon = (url: string): void => {
    setIsModalVisible(true);
    setPokemonSelectedUrl(url);
  };

  const handleOnCloseModal = () => setIsModalVisible(false);

  return (
    <div id="pokedex">
      <PokemonSelection
        pokemonArray={pokemonArray}
        disablePrevButton={!previousPageUrl || loadingList}
        disableNextButton={!nextPageUrl || loadingList}
        handleOnPokemonClick={handleOnClickPokemon}
        handleOnNavButtons={handleOnClickNavButtons}
      />
      {pokemonDetail && !!isModalVisible && !loadingDetail ? (
        <PokemonDetailModal pokemonDetail={pokemonDetail} handleOnCloseModal={handleOnCloseModal} />
      ) : null}
    </div>
  );
};
