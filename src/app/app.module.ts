import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerLigneComponent } from './player/player-ligne/player-ligne.component';
import { EditPlayerComponent } from './player/edit-player/edit-player.component';
import { PlayerListComponent } from './player/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MainPageComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    PlayerLigneComponent,
    EditPlayerComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
