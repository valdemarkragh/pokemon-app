import { StorageService } from './../../services/storage.service';
import { Pokemon } from './../../models/pokemon.model';
import { PokemonDetailService } from './../../services/pokemon-detail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  constructor(
    private readonly pokemonDetailService: PokemonDetailService,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    scrollTo(0, 0);
  }
  catchPokemon(pokemon: Pokemon): void {
    this.storageService.addUserPokemon(pokemon);
  }

  get pokemon(): Pokemon {
    return this.pokemonDetailService.pokemon();
  }

  get loading(): Boolean {
    return this.pokemonDetailService.loading();
  }

  get isPokemonCaught(): Boolean {
    return this.pokemonDetailService.isPokemonCaught();
  }
}
