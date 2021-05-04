import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: Boolean = Boolean(
    this.storageService.getUserStorage()
  );

  constructor(private readonly storageService: StorageService) {}

  loginUser(user: User): void {
    this.storageService.setUserStorage(user);
    this._isAuthenticated = true;
  }

  logoutUser(): void {
    this.storageService.removeUserStorage();
    this._isAuthenticated = false;
  }

  public isAuthenticated(): Boolean {
    return this._isAuthenticated;
  }
}
