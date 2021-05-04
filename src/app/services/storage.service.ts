import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _userName: User;
  private _userPokemons: Pokemon[] =
    this.getUserPokemons() !== null ? this.getUserPokemons() : [];

  constructor() {}

  public setUserStorage(name: User): void {
    this._userName = name;
    localStorage.setItem('user', JSON.stringify(this._userName));
  }

  public getUserStorage(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public removeUserStorage(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('caught_pokemons');
    this._userPokemons = [];
  }

  public addUserPokemon(pokemon: Pokemon): void {
    this._userPokemons.push(pokemon);
    this.setUserPokemons(this._userPokemons);
  }

  private setUserPokemons(pokemons: Pokemon[]) {
    localStorage.setItem('caught_pokemons', JSON.stringify(pokemons));
  }

  private getUserPokemons(): Pokemon[] {
    return JSON.parse(localStorage.getItem('caught_pokemons'));
  }

  public isPokemonCaught(pokemon: Pokemon): Boolean {
    return Boolean(this._userPokemons.find((p) => p.id === pokemon.id));
  }

  public userPokemons(): Pokemon[] {
    return this._userPokemons;
  }
}
