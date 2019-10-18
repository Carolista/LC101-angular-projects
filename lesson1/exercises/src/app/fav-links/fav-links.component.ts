import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'fav-links',
    templateUrl: './fav-links.component.html',
    styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

    favLinks = ["https://pixabay.com/images/search/science%20fiction/", "https://ifcomp.org/", "https://deloreanipsum.com/"];

    constructor() { }

    ngOnInit() {
    }

}
