import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Exercises: Angular Lesson 3';
    takeOffEnabled = true;
    leftMax = false;
    rightMax = false;
    topMax = false;
    bottomMax = true;

    // Readouts
    message = "READY FOR LIFTOFF";
    fuelStatus = "Full tank";
    chat = "Houston, we are ready when you are!";
    shuttleHeight = 0;

    // Graphic field
    fieldColor = "#6baa30";
    flightColor = "#15a5af";
    edgeColor = "#f18724";
    landColor = "#6baa30";
    abortColor = "#c54017";

    xPos = "100px"; // for moving left and right
    yPos = "0px"; // for moving up and down

    constructor(el: ElementRef) {}

    moveRocket(shuttleBkg, direction): any {
        let maxH = parseInt(shuttleBkg.getBoundingClientRect().height);
        let maxW = parseInt(shuttleBkg.getBoundingClientRect().width);
        if (direction === "right") {
            if (parseInt(this.xPos) >= maxW - 80) {
                this.fieldColor = this.edgeColor;
                this.rightMax = true;
            } else {
                let movement = parseInt(this.xPos) + 10 + 'px';
                this.xPos = movement;
                this.fieldColor = this.flightColor;
                this.leftMax = false;
            }
        } else if (direction === "left") {
            if (parseInt(this.xPos) === 0) {
                this.fieldColor = this.edgeColor;
                this.leftMax = true;
            } else {
                let movement = parseInt(this.xPos) - 10 + 'px';
                this.xPos = movement;
                this.fieldColor = this.flightColor;
                this.rightMax = false;
            }
        } else if (direction === "up") {
            if (parseInt(this.yPos) >= maxH - 80) {
                this.fieldColor = this.edgeColor; 
                this.topMax = true;
            } else {
                let movement = parseInt(this.yPos) + 10 + 'px';
                this.yPos = movement;
                this.shuttleHeight += 1000;                this.fieldColor = this.flightColor;
                this.bottomMax = false;
            }
        } else if (direction === "down") {
            if (parseInt(this.yPos) === 0) {
                this.fieldColor = this.landColor;
                this.bottomMax = true;
            } else {
                let movement = parseInt(this.yPos) - 10 + 'px';
                this.yPos = movement;
                this.shuttleHeight -= 1000;
                this.fieldColor = this.flightColor;
                this.topMax = false;
            }
        }
    }
    
    takeOff(): any {
        confirm("Confirm that the shuttle is ready for takeoff.");
        if (true) {
            this.message = "SHUTTLE IN FLIGHT";
            this.fuelStatus = "Full burn"
            this.chat = "What an amazing view!"
            this.fieldColor = this.flightColor;
            // this.shuttleHeight = 10000;
        }
    }

    land(): any {
        alert("The shuttle is landing. Landing gear engaged.");
        if (true) {
            this.message = "SHUTTLE HAS LANDED";
            this.fuelStatus = "Fuel replaced"
            this.chat = "Can we go again?"
            this.fieldColor = this.landColor;
            this.shuttleHeight = 0;
            this.yPos = "0px";
        }
    }

    abort(): any {
        confirm("Please confirm that you wish to abort the mission.");
        if (true) {
            this.message = "MISSION ABORTED";
            this.fuelStatus = "Full tank"
            this.chat = "(Disappointed sigh)"
            this.fieldColor = this.abortColor;
            this.shuttleHeight = 0;
            this.yPos = "0px";
        }
    }

    isVisible(): any {
        if (this.takeOffEnabled) {
            return "hidden";
        } else {
            return "visible";
        }
    }


}
