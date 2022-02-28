import { UrlElementDto } from '../../model';

export type PokemonListResponse = {
  count: number;
  next: string;
  previous: string;
  results: UrlElementDto[];
};
