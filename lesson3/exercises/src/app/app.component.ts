import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Exercises: Angular Lesson 3';

    // Top section
    message = 'Space shuttle ready for takeoff!';

    // Right section
    shuttleHeight = 0;

    // Graphic field
    fieldColor = "green";
    rocketXPos = 0;
    rocketYPos = 0;

    takeOff(): any {
        confirm("Confirm that the shuttle is ready for takeoff.")
        if (true) {
            this.message = "Shuttle in flight.";
            this.fieldColor = "blue";
            this.shuttleHeight = 10000;
        }
    }

    land(): any {
        alert("The shuttle is landing. Landing gear engaged.")
        if (true) {
            this.message = "Shuttle has landed.";
            this.fieldColor = "green";
            this.shuttleHeight = 0;
        }
    }

    abort(): any {
        confirm("Please confirm that you wish to abort the mission.")
        if (true) {
            this.message = "Mission aborted.";
            this.fieldColor = "red";
            this.shuttleHeight = 0;
        }
    }

    goUp(): any {
        // look at 30.6.4.2
    }

    goDown(): any {
        // look 
    }
}
