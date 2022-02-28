import * as React from 'react';
import { UrlElementDto } from '../../viewModel';
import { Button, Text } from '../../atoms';
import { TEXT_TYPE, POKEBALL_PNG_SRC } from '../../../consts';
import { PokemonList } from '../../organisms';

import './pokemonSelection.scss';

export interface Props {
  pokemonArray: UrlElementDto[];
  disablePrevButton: boolean;
  disableNextButton: boolean;
  handleOnPokemonClick: (url: string) => void;
  handleOnNavButtons: (isNextButton: boolean) => void;
}

export const PokemonSelection = (props: Props): JSX.Element => (
  <div className="pokemon-selection">
    <div className="pokemon-selection__header">
      <Text type={TEXT_TYPE.TITLE} content="Pokedex" />
      <Text type={TEXT_TYPE.TEXT} content="Click on a pokemon to see its detail" />
    </div>
    <div className="pokemon-selection__content">
      <PokemonList
        thumbnailImage={POKEBALL_PNG_SRC}
        pokemonArray={props.pokemonArray}
        handleOnClick={props.handleOnPokemonClick}
      />
      <div className="pokemon-selection__content___footer">
        <Button
          disabled={props.disablePrevButton}
          content={<span>Previous</span>}
          handleOnClick={() => props.handleOnNavButtons(false)}
        />
        <Button
          disabled={props.disableNextButton}
          content={<span>Next</span>}
          handleOnClick={() => props.handleOnNavButtons(true)}
        />
      </div>
    </div>
  </div>
);
