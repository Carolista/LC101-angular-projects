import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    movieTitle = "Fantastic Flicks";
    movies = ['Serenity', 'Contact', 'The Martian', '2001: A Space Odyssey', 'Independence Day', 'Guardians of the Galaxy', 'Close Encounters of the Third Kind', 'Logan\'s Run'];

    constructor() { }

    ngOnInit() {
    }

}
