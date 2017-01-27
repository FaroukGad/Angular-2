import { Component, OnInit } from '@angular/core';
import {JeuService} from '../jeu.service';

@Component({
    moduleId: 'moduleId',
  selector: 'app-jeu-details',
  templateUrl: './jeu-details.component.html',
  styleUrls: ['./jeu-details.component.css']
})
export class JeuDetailsComponent implements OnInit {
    games: any;
    genres: any;


    constructor(private game: JeuService, private genre: JeuService) { }

  ngOnInit() {
      this.games = this.game.getgames();
      this.genres = this.genre.getgenres();
  }

}
