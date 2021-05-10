import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerLoginPage } from './pages/trainer-login/trainer-login.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { TrainerProfilePage } from './pages/trainer-profile/trainer-profile.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemon-catalogue',
    data: { animation: 'isLeft' },
  },
  {
    path: 'pokemon-catalogue',
    component: PokemonCataloguePage,
    data: { animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'pokemon-detail/:name',
    component: PokemonPage,
    data: { animation: 'isLeft' },
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: TrainerProfilePage,
    data: { animation: 'isRight' },
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: TrainerLoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
