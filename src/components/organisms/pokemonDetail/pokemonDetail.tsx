import * as React from 'react';
import { IMAGE_TYPE, TEXT_TYPE, LABELED_DETAILS } from '../../../consts';
import { Image, Text } from '../../atoms';
import { DetailCard } from '../../molecules';
import { PokemonDetailModel } from '../../viewModel';

import './pokemonDetail.scss';

export interface Props {
  pokemonDetail: PokemonDetailModel;
}

export const PokemonDetail = (props: Props): JSX.Element => {
  const { pokemonDetail } = props;

  const getLabeledDetails = (): { [key: string]: string } =>
    Object.keys(pokemonDetail)
      .filter((key) => LABELED_DETAILS.includes(key))
      .reduce((obj, key) => {
        obj[key] = pokemonDetail[key];
        return obj;
      }, {});

  return (
    <div className="pokemon-details">
      <Image
        source={pokemonDetail.mainImage ? pokemonDetail.mainImage : pokemonDetail.spriteImage}
        type={IMAGE_TYPE.LARGE}
      />
      <div className="pokemon-details__info">
        <div className="pokemon-details__info__title">
          <Text type={TEXT_TYPE.TITLE} content={`#${pokemonDetail.id} - ${pokemonDetail.name}`} />
        </div>
        <DetailCard
          title={
            pokemonDetail.firstAppareance
              ? `First appeareance in Pokemon ${pokemonDetail.firstAppareance}`
              : `Event Pokemon`
          }
          labeledDetails={getLabeledDetails()}
          bottomText={
            pokemonDetail.moves.length > 0
              ? `${pokemonDetail.name} can learn: ${pokemonDetail.moves}`
              : `${pokemonDetail.name} can't learn any move`
          }
        />
      </div>
    </div>
  );
};
