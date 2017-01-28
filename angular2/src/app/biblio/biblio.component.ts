import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})
export class BiblioComponent implements OnInit {
    games;
    genres;


    constructor(private jeuService: JeuService) { }

    ngOnInit() {
        this.games = this.jeuService.getgames();
        this.genres = this.jeuService.getgenres();
    }

    getGenreNameWithGame(game) {
        let result = game.genres.map(id => this.genres.find(genre => genre.id == id).name);
        return result.join(", ");
    }

}
