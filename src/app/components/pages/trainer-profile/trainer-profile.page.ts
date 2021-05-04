import { User } from './../../../models/user.model';
import { StorageService } from 'src/app/services/storage.service';
import { Pokemon } from './../../../models/pokemon.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.page.html',
  styleUrls: ['./trainer-profile.page.scss'],
})
export class TrainerProfilePage {
  constructor(private readonly storageService: StorageService) {}

  get pokemons(): Pokemon[] {
    return this.storageService.userPokemons();
  }

  get username(): User {
    return this.storageService.getUserStorage();
  }
}
