import { PokemonService } from './../../services/pokemon.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonResponse } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-pagination',
  templateUrl: './pokemon-pagination.component.html',
  styleUrls: ['./pokemon-pagination.component.scss'],
})
export class PokemonPaginationComponent implements OnInit {
  @Input() response: PokemonResponse;
  @Output() animateNext: EventEmitter<any> = new EventEmitter();

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {}

  setBtnClass(action) {
    return {
      disabled:
        action === 'next'
          ? Boolean(!this.response?.next)
          : Boolean(!this.response?.previous),
    };
  }

  nextPage(): void {
    this.animateNext.emit();
    this.pokemonService.fetchPokemons(this.response.next);
  }

  prevPage(): void {
    this.pokemonService.fetchPokemons(this.response.previous);
  }
}
