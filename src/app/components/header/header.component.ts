import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _userSub: Subscription;
  public isAuthenticated: Boolean = Boolean(
    this.storageService.getUserStorage()
  );

  constructor(
    private readonly authService: AuthService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this._userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this._userSub.unsubscribe();
  }

  onLogout(): void {
    this.storageService.removeUserStorage();
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
