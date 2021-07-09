class Office {
    constructor() {
        this.rooms_list = [];
    }

    addRoom(room) {
        this.rooms_list.push(room)
    }

    listAllRooms() {
        return this.rooms_list;
    }

    listAvailableRooms() {
       return this.rooms_list.filter(room => room.availability != false )
    }
}