describe('Office', () => {
    let office;
    let room1;
    let room2;

    beforeEach(() => {
        office = new Office();
        // room1 = new Room("Pacific");
        room1 = jasmine.createSpyObj('room1', ['getName', 'enter', 'leave']);
        room2 = jasmine.createSpyObj('room2', ['getName', 'enter', 'leave']);
    });

    describe("Meeting room", () => {
        it("add a named meeting room", () => {
            office.addRoom(room1)
            expect(office.listAllRooms()).toContain(room1);
        });
        it("list all meeting rooms", () => {
            office.addRoom(room1)
            office.addRoom(room2)
            expect(office.listAllRooms()).toContain(room1, room2);
        });
        it("list all available meeting rooms", () => {
            office.addRoom(room1)
            room1.enter();
            room1.leave();
            office.addRoom(room2)
            room2.enter();
            expect(office.listAvailableRooms()).toContain(room2)
        });
    });

})