import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PlayerLigneComponent } from './player/player-ligne/player-ligne.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MainPageComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    PlayerLigneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
