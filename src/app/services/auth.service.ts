import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();

  constructor(private readonly storageService: StorageService) {}

  loginUser(user: User): void {
    this.user.next(user);
  }

  logoutUser(): void {
    this.user.next(null);
  }

  autoLogin(): void {
    const loggedInUser: User = this.storageService.getUserStorage();
    if (!loggedInUser) {
      return;
    }

    this.user.next(loggedInUser);
  }
}
