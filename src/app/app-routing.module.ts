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
    redirectTo: '/pokemon-catalogue',
  },
  {
    path: 'pokemon-catalogue',
    component: PokemonCataloguePage,
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
    path: 'trainer',
    component: TrainerLoginPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
