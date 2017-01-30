import { Component, OnInit } from '@angular/core';
import {JeuService} from '../jeu.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    games: any = "";
    urlImg: any = "";
    constructor(private JeuService: JeuService) { }

    ngOnInit() {
        this.games = this.JeuService.getgames();
        this.urlImg = this.games
    }

}