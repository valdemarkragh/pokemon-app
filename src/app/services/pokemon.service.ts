import { Pokemon, PokemonResponse } from './../models/pokemon.model';
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
  private _page: number;

  constructor(private readonly http: HttpClient) {}

  public fetchPokemons(url: string): void {
    this._currentUrl = url;
    this.http
      .get<PokemonResponse>(url)
      .pipe(
        map((response: PokemonResponse) => {
          this._response = response;
          this._page = this.getPage(response);
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

  private getPage(response: PokemonResponse): number {
    const url = response.next;
    return Number(url.substring(url.indexOf('=') + 1, url.indexOf('&'))) - 20;
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

  public page(): number {
    return this._page;
  }
}
