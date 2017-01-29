import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JeuService} from '../jeu.service';

@Component({
    moduleId: 'moduleId',
  selector: 'app-jeu-details',
  templateUrl: './jeu-details.component.html',
  styleUrls: ['./jeu-details.component.css']
})
export class JeuDetailsComponent implements OnInit {
    games: any;
    id: any;
    idFinal: any;
    test: any;


    constructor(private jeuService: JeuService, private route: ActivatedRoute) { }

  ngOnInit() {
        this.id = this.route.snapshot.params['gameId'];
        this.games = this.jeuService.getgames();
        this.idFinal = this.id - 1;
        this.test = this.games[this.idFinal];

    }



}

