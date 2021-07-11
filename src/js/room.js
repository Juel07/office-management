'use strict';

class Room {
    constructor(name) {
        this.name = name;
        this.availability = true;
        this.meeting = null;
        this.team = null;
    }

    getName() {
        return this.name;
    }

    isAvailable() {
        return this.availability;
    }

    enter(meeting, team) {
        this.meeting = meeting;
        this.team = team;
        if (!this.availability) {
            throw new Error("Room is occupied");
        }
        this.availability = false;
        return this.displayNotice();
    }

    leave() {
        this.availability = true;
        this.meeting = null;
        this.team = null;
    }

    displayNotice() {
        return `Team ${this.team} is having a meeting on ${this.meeting} in room ${this.name}.`;
    }
}