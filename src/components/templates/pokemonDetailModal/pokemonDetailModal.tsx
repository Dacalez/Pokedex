import * as React from 'react';
import { Button } from '../../atoms';
import { PokemonDetail } from '../../organisms';
import { PokemonDetailModel } from '../../viewModel';

import './pokemonDetailModal.scss';

interface Props {
  pokemonDetail: PokemonDetailModel;
  handleOnCloseModal: () => void;
}

export const PokemonDetailModal = (props: Props): JSX.Element => (
  <div className="pokemon-detail-modal">
    <div className="pokemon-detail-modal__content">
      <PokemonDetail pokemonDetail={props.pokemonDetail} />
      <div className="pokemon-detail-modal__content__footer">
        <Button
          disabled={false}
          content={<span>Back</span>}
          handleOnClick={props.handleOnCloseModal}
        />
      </div>
    </div>
  </div>
);
