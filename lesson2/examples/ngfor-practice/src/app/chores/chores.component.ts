import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [{title: "Today's Chores", tasks: ['Empty dishwasher', 'Clean bathroom']}, {title: "Tomorrow's Chores", tasks: ['Do laundry', 'Do graphic design side work']}];
//    todoTitles = ["Today's Chores", "Next Week's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
