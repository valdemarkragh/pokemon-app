import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss'],
})
export class PokemonPaginationComponent implements OnInit {
  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {}

  setNextClass() {
    let disabled = {
      disabled: this.pokemonService.response().next === null,
    };

    return disabled;
  }

  setPrevClass() {
    let disabled = {
      disabled: this.pokemonService.response().previous === null,
    };

    return disabled;
  }

  nextPage(): void {
    this.pokemonService.fetchPokemons(this.pokemonService.response().next);
  }

  prevPage(): void {
    this.pokemonService.fetchPokemons(this.pokemonService.response().previous);
  }
}
