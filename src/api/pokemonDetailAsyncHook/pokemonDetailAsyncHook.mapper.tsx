import { PokemonDetailResponse } from '../apiModel';
import { PokemonDetailModel } from '../../model';

export const mapPokemonDetailResponseToPokemonDetail = (
  pokemonDetailResponse: PokemonDetailResponse
): PokemonDetailModel => ({
  id: pokemonDetailResponse.id,
  name: pokemonDetailResponse.name,
  height: pokemonDetailResponse.height,
  weight: pokemonDetailResponse.weight,
  type: pokemonDetailResponse.types.map((typeDto) => typeDto.type.name).join('-'),
  moves: pokemonDetailResponse.moves.map((moveDto) => moveDto.move.name).join(' · '),
  mainImage: pokemonDetailResponse.sprites.other['home'].front_default,
  spriteImage: pokemonDetailResponse.sprites['front_default'].toString(),
  firstAppareance: pokemonDetailResponse.game_indices[0]?.version.name
});
