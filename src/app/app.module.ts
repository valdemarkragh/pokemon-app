import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { PokemonPage } from './components/pages/pokemon/pokemon.page';
import { PokemonCataloguePage } from './components/pages/pokemon-catalogue/pokemon-catalogue.page';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PokemonPaginationComponent } from './components/pokemon-pagination/pokemon-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HeaderComponent,
    PokemonPaginationComponent,
    PokemonCataloguePage,
    PokemonPage,
    PokemonDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
