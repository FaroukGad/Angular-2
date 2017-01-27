import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {JeuService} from './jeu.service';
import { JeuDetailsComponent } from './jeu-details/jeu-details.component';

@NgModule({
  declarations: [
      AppComponent,
      JeuDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JeuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
