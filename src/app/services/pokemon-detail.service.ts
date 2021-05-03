import { Pokemon } from './../models/pokemon.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonDetailService {
  private _pokemon: Pokemon;
  private _error: string = '';
  private _loading: Boolean;

  constructor(private readonly http: HttpClient) {}

  public fetchPokemon(name: string): void {
    this._loading = true;
    this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .subscribe(
        (pokemon: Pokemon) => {
          this._pokemon = pokemon;
          this._loading = false;
        },
        (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      );
  }

  public pokemon(): Pokemon {
    return this._pokemon;
  }

  public error(): string {
    return this._error;
  }

  public loading(): Boolean {
    return this._loading;
  }
}
