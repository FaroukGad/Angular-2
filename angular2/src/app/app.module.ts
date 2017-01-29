import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import {JeuService} from './jeu.service';
import { JeuDetailsComponent } from './jeu-details/jeu-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiblioComponent } from './biblio/biblio.component';

@NgModule({
  declarations: [
      AppComponent,
      JeuDetailsComponent,
      AppComponent,
      HeaderComponent,
      FooterComponent,
      BiblioComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [JeuService],
  bootstrap: [AppComponent]
})
export class AppModule { }