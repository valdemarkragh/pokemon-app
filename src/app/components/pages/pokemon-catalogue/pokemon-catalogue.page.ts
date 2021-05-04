import { PokemonResponse } from './../../../models/pokemon.model.response';
import { Pokemon } from './../../../models/pokemon.model';
import { PokemonService } from './../../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-catalogue',
  templateUrl: './pokemon-catalogue.page.html',
})
export class PokemonCataloguePage implements OnInit {
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
