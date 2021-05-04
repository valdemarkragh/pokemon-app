import { Pokemon } from './pokemon.model';

export interface User {
  name: string;
  pokemons?: Pokemon[];
}
