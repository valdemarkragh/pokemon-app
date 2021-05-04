import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-trainer-auth',
  templateUrl: './trainer-auth.component.html',
  styleUrls: ['./trainer-auth.component.scss'],
})
export class TrainerAuthComponent {
  constructor(
    private readonly storageService: StorageService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit(form: NgForm) {
    const trainerName = form.value.trainername;

    this.storageService.setUserStorage(trainerName);
    this.authService.loginUser(trainerName);

    this.router.navigate(['/pokemon-catalogue']);
  }
}