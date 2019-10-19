import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

    constructor() { }

    ngOnInit() {
    }

    errorMsg = "";

    addMovie(newTitle: string) {
        if (newTitle === "") {
            this.errorMsg = "Please enter a movie name.";
        } else if (this.movies.includes(newTitle)) {
            this.errorMsg = "That movie is already on the list.";
        } else {
            this.movies.push(newTitle);
            this.errorMsg = "";
        }
    }

}