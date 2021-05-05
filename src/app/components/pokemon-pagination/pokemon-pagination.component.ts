import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss'],
})
export class PokemonPaginationComponent implements OnInit {
  @Input() response: PokemonResponse;

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {}

  setNextClass() {
    let disabled = {
      disabled: this.response?.next === null,
    };

    return disabled;
  }

  setPrevClass() {
    let disabled = {
      disabled: this.response?.previous === null,
    };

    return disabled;
  }

  nextPage(): void {
    this.pokemonService.fetchPokemons(this.response.next);
  }

  prevPage(): void {
    this.pokemonService.fetchPokemons(this.response.previous);
  }
}
