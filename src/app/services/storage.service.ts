import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _userName: User;
  private _userPokemons: Pokemon[] = [];

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
  }
}
