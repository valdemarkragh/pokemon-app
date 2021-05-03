import { PokemonResponse } from './../../models/pokemon.model.response';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.fetchPokemons(
      this.pokemonService.currentUrl()
        ? this.pokemonService.currentUrl()
        : 'https://pokeapi.co/api/v2/pokemon/'
    );
  }

  get pokemons(): Pokemon[] {
    return this.pokemonService.pokemons();
  }

  get response(): PokemonResponse {
    return this.pokemonService.response();
  }
}
