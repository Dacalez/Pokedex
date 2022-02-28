import * as React from 'react';
import { ThumbnailButton } from '../../molecules';
import { UrlElementDto } from '../../viewModel';
import './pokemonList.scss';

export interface Props {
  pokemonArray: UrlElementDto[];
  thumbnailImage: string;
  handleOnClick: (url: string) => void;
}

export const PokemonList = (props: Props): JSX.Element => (
  <div className="pokemon-list">
    {props.pokemonArray.map((pokemon, idx) => (
      <ThumbnailButton
        thumbnailSource={props.thumbnailImage}
        handleOnClick={() => props.handleOnClick(pokemon.url)}
        text={pokemon.name}
        key={idx}
      />
    ))}
  </div>
);
