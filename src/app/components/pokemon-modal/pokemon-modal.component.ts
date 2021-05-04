import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokemonDetailService } from 'src/app/services/pokemon-detail.service';

@Component({
  selector: 'app-pokemon-modal',
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.scss'],
})
export class PokemonModalComponent {
  constructor(private readonly pokemonDetailService: PokemonDetailService) {}

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon();
  }
}
