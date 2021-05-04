import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPage } from './components/pages/pokemon/pokemon.page';
import { PokemonCataloguePage } from './components/pages/pokemon-catalogue/pokemon-catalogue.page';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonPaginationComponent } from './components/pokemon-pagination/pokemon-pagination.component';
import { PokemonModalComponent } from './components/pokemon-modal/pokemon-modal.component';
import { TrainerLoginPage } from './components/pages/trainer-login/trainer-login.page';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';

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
    AuthComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
