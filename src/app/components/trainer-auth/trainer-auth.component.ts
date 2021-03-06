import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-trainer-auth',
  templateUrl: './trainer-auth.component.html',
  styleUrls: ['./trainer-auth.component.scss'],
})
export class TrainerAuthComponent implements OnInit {
  @ViewChild('figureContainer', { static: true })
  figureContainer: ElementRef<HTMLDivElement>;
  @ViewChild('formContainer', { static: true })
  formContainer: ElementRef<HTMLDivElement>;
  @ViewChild('figureShadow', { static: true })
  figureShadow: ElementRef<HTMLDivElement>;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    gsap.from(this.figureContainer.nativeElement, {
      x: -1000,
      duration: 1,
    });
    gsap.from(this.figureShadow.nativeElement, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
    gsap.from(this.formContainer.nativeElement, {
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  }

  onSubmit(form: NgForm) {
    const trainerName = form.value.trainername;

    this.authService.loginUser(trainerName);

    this.router.navigate(['/pokemon-catalogue']);
  }
}
