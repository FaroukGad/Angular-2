import { Routes } from '@angular/router';
import { BiblioComponent } from './biblio/biblio.component';
import { JeuDetailsComponent } from './jeu-details/jeu-details.component';

export const ROUTES: Routes = [
  { path: 'biblio', component: BiblioComponent },
  { path: 'games/:gameId', component: JeuDetailsComponent }
];