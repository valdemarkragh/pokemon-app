import { PokemonDetailService } from './../../../services/pokemon-detail.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
})
export class PokemonPage implements OnInit {
  name: string;
  constructor(
    private pokemonDetailService: PokemonDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.name = params['name'];
      this.pokemonDetailService.fetchPokemon(this.name);
    });
  }
}
