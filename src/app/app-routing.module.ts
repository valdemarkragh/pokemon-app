import { AuthGuard } from './guards/auth.guard';
import { PokemonPage } from './components/pages/pokemon/pokemon.page';
import { ProfilePage } from './components/pages/profile/profile.page';
import { PokemonCataloguePage } from './components/pages/pokemon-catalogue/pokemon-catalogue.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerLoginPage } from './components/pages/trainer-login/trainer-login.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
  },
  {
    path: 'pokemon-catalogue',
    component: PokemonCataloguePage,
    canActivate: [AuthGuard],
  },
  {
    path: 'pokemon-detail/:name',
    component: PokemonPage,
  },
  {
    path: 'profile',
    component: ProfilePage,
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
