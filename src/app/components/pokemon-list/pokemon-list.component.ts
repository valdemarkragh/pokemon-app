import { Pokemon, PokemonResponse } from '../../models/pokemon.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent {
  constructor() {}

  @Input() pokemons: Pokemon[];
  @Input() response: PokemonResponse;
}
