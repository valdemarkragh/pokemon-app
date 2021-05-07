import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPage } from './pages/pokemon/pokemon.page';
import { PokemonCataloguePage } from './pages/pokemon-catalogue/pokemon-catalogue.page';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonPaginationComponent } from './components/pokemon-pagination/pokemon-pagination.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { TrainerLoginPage } from './pages/trainer-login/trainer-login.page';
import { TrainerAuthComponent } from './components/trainer-auth/trainer-auth.component';
import { FormsModule } from '@angular/forms';
import { TrainerProfilePage } from './pages/trainer-profile/trainer-profile.page';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonPaginationComponent,
    PokemonCataloguePage,
    PokemonPage,
    PokemonDetailComponent,
    PokemonModalComponent,
    TrainerLoginPage,
    TrainerAuthComponent,
    HeaderComponent,
    TrainerProfilePage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
