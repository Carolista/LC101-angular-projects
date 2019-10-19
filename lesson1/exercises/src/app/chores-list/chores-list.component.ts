import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chores-list',
    templateUrl: './chores-list.component.html',
    styleUrls: ['./chores-list.component.css']
})
export class ChoresListComponent implements OnInit {
    choresTitle = "Tasks for Today";
    chores = ['Charge sonic screwdriver', 'Wash and wax Delorean', 'Reticulate splines', 'Pay C-3PO a compliment', 'Realign warp core', 'Steal back Tessaract', 'Plant potatoes', 'Make fun of Jayne\'s hat'];

    constructor() { }

    ngOnInit() {
    }
}