import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Exercises: Angular Lesson 3';

    // Top section readout
    message = 'Space shuttle ready for takeoff!';

    // Right section readout
    shuttleHeight = 0;

    // Graphic field
    fieldColor = "green";
    xPos = "0px"; // for moving left and right
    yPos = "0px"; // for moving up and down

    moveRocket(direction): any {
        if (direction === "right") {
            // if 
            let movement = parseInt(this.xPos) + 10 + 'px';
            this.xPos = movement;
        } else if (direction === "left") {
            if (parseInt(this.xPos) >= 10) {
                let movement = parseInt(this.xPos) - 10 + 'px';
                this.xPos = movement;
            }
        } else if (direction === "up") {
            let movement = parseInt(this.yPos) + 10 + 'px';
            // if (this.yPos < ... // shuttle background height
            this.yPos = movement;
            this.shuttleHeight = 10000;
        } else if (direction === "down") {
            let movement = parseInt(this.yPos) - 10 + 'px';
            if (parseInt(this.yPos) >= 10) {
                this.yPos = movement;
                this.shuttleHeight = 0;
            }
        }
    }
    
    takeOff(): any {
        confirm("Confirm that the shuttle is ready for takeoff.");
        if (true) {
            this.message = "Shuttle in flight.";
            this.fieldColor = "blue";
            this.shuttleHeight = 10000;
        }
    }

    land(): any {
        alert("The shuttle is landing. Landing gear engaged.");
        if (true) {
            this.message = "Shuttle has landed.";
            this.fieldColor = "green";
            this.shuttleHeight = 0;
            this.yPos = "0px";
        }
    }

    abort(): any {
        confirm("Please confirm that you wish to abort the mission.");
        if (true) {
            this.message = "Mission aborted.";
            this.fieldColor = "red";
            this.shuttleHeight = 0;
            this.yPos = "0px";
        }
    }


}
