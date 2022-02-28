import { UrlElementDto } from '../../model';

export type PokemonDetailResponse = {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
  species: UrlElementDto;
  abilities: AbilityDto[];
  game_indices: GameIndicesDto[];
  moves: MoveDto[];
  held_items: HeldItemDto[];
  types: TypeDto[];
  past_types: PastTypesDto[];
  sprites: SpriteDto;
  stats: StatDto[];
};

type AbilityDto = {
  ability: UrlElementDto;
  is_hidden: boolean;
  slot: number;
};

export type GameIndicesDto = {
  game_index: number;
  version: UrlElementDto;
};

type MoveDto = {
  move: UrlElementDto;
  version_group_details: MoveVersionDto[];
};

type MoveVersionDto = {
  level_learned_at: number;
  move_learn_method: UrlElementDto;
  version_group: UrlElementDto;
};

type HeldItemDto = {
  type: UrlElementDto;
  version_details: HeldItemVersionDto[];
};

type HeldItemVersionDto = {
  rarity: number;
  version: UrlElementDto;
};

type PastTypesDto = {
  generation: UrlElementDto;
  types: TypeDto[];
};

type TypeDto = {
  slot: number;
  type: UrlElementDto;
};

type StatDto = {
  base_stat: number;
  effort: 0;
  stat: UrlElementDto;
};

type SpriteDto = {
  [key: string]:
    | string
    | { [key: string]: { [key: string]: string } }
    | { [key: string]: { [key: string]: { [key: string]: string } } };
};
