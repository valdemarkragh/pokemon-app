import { PokemonResponse } from './../models/pokemon.model.response';
import { Pokemon } from './../models/pokemon.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _response: PokemonResponse;
  private _pokemons: Pokemon[] = [];
  private _error: string = '';
  private _currentUrl: string = '';

  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(url: string): void {
    this._currentUrl = url;
    this.http
      .get<PokemonResponse>(url)
      .pipe(
        map((response: PokemonResponse) => {
          this._response = response;
          return response.results.map((pokemon: Pokemon) => ({
            ...pokemon,
            id: this.getId(pokemon.url),
          }));
        })
      )
      .subscribe(
        (pokemons: Pokemon[]) => {
          this._pokemons = pokemons;
        },
        (error: HttpErrorResponse) => {
          this._error = error.message;
        }
      );
  }

  private getId(url: string): number {
    return Number(url.split('/').filter(Boolean).pop());
  }

  public pokemons(): Pokemon[] {
    return this._pokemons;
  }

  public response(): PokemonResponse {
    return this._response;
  }

  public error(): string {
    return this._error;
  }

  public currentUrl(): string {
    return this._currentUrl;
  }
}
