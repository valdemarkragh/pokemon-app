import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated: Boolean = Boolean(this.isUserAuth());

  constructor() {}

  public loginUser(username: string): void {
    this.setLoggedInUser(username);
    this._isAuthenticated = true;
  }

  public logoutUser(): void {
    this.removeAuth();
    this._isAuthenticated = false;
  }

  public getLoggedInUser(): string {
    return localStorage.getItem('auth');
  }

  private isUserAuth(): Boolean {
    return Boolean(localStorage.getItem('auth'));
  }

  private removeAuth(): void {
    localStorage.removeItem('auth');
  }

  private setLoggedInUser(name: string): void {
    localStorage.setItem('auth', name);
    if (!this.userExists) {
      localStorage.setItem(this.getLoggedInUser(), JSON.stringify([]));
    }
  }

  private userExists(name: string): Boolean {
    return Boolean(localStorage.getItem(name));
  }

  public isAuthenticated(): Boolean {
    return this._isAuthenticated;
  }
}
