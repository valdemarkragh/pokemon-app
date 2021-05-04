import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private readonly authService: AuthService) {}

  public setInitialStorage(): void {
    localStorage.setItem(
      this.authService.getLoggedInUser(),
      JSON.stringify([])
    );
  }

  public addUserPokemon(pokemon: Pokemon): void {
    const currentPokemons = this.getUserPokemons();
    currentPokemons.push(pokemon);
    this.setUserPokemons(currentPokemons);
  }

  public setUserPokemons(pokemons: Pokemon[]) {
    localStorage.setItem(
      this.authService.getLoggedInUser(),
      JSON.stringify(pokemons)
    );
  }

  public getUserPokemons(): Pokemon[] {
    return JSON.parse(localStorage.getItem(this.authService.getLoggedInUser()));
  }

  public isPokemonCaught(pokemon: Pokemon): Boolean {
    return Boolean(this.getUserPokemons().find((p) => p.id === pokemon.id));
  }
}
