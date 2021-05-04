import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.page.html',
  styleUrls: ['./trainer-profile.page.scss'],
})
export class TrainerProfilePage {
  constructor(
    private readonly storageService: StorageService,
    private readonly authService: AuthService
  ) {}

  get pokemons(): Pokemon[] {
    return this.storageService.getUserPokemons();
  }

  get username(): string {
    return this.authService.getLoggedInUser();
  }
}
