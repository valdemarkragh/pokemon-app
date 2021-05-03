import { Pokemon } from './../../models/pokemon.model';
import { PokemonDetailService } from './../../services/pokemon-detail.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  constructor(private pokemonDetailService: PokemonDetailService) {}

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon();
  }

  get loading(): Boolean {
    return this.pokemonDetailService.loading();
  }
}
