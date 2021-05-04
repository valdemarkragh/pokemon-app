import { AuthGuard } from './guards/auth.guard';
import { PokemonPage } from './components/pages/pokemon/pokemon.page';
import { TrainerProfilePage } from './components/pages/trainer-profile/trainer-profile.page';
import { PokemonCataloguePage } from './components/pages/pokemon-catalogue/pokemon-catalogue.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerLoginPage } from './components/pages/trainer-login/trainer-login.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemon-catalogue',
  },
  {
    path: 'pokemon-catalogue',
    component: PokemonCataloguePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'pokemon-detail/:name',
    component: PokemonPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: TrainerProfilePage,
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
