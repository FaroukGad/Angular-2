import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router'
=======
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
>>>>>>> 3e8ee671d22bb02fc35009515121de7029e95bf9

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
