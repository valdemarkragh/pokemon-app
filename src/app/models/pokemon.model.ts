export interface PokemonResponse {
  count: number;
  next: string;
  previous?: string;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name?: string;
  url?: string;
  types?: PokemonTypes[];
  stats?: PokemonStats[];
  height?: string;
  weight?: string;
  abilities?: PokemonAbilities[];
  base_experience?: string;
  moves?: PokemonMoves[];
}

export interface PokemonStats {
  base_stat: number;
  stat: PokemonStatName;
}

export interface PokemonStatName {
  name: string;
}

export interface PokemonTypes {
  type: PokemonTypeName;
}

export interface PokemonTypeName {
  name: string;
}

export interface PokemonAbilities {
  ability: PokemonAbilityName;
}

export interface PokemonAbilityName {
  name: string;
}

export interface PokemonMoves {
  move: PokemonMoveName;
}

export interface PokemonMoveName {
  name: string;
}
