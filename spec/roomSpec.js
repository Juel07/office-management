describe('room', () => {

    let room;
    let room_name = "Pacific";
    let meeting = "Onboarding";
    let team = "Makers";

    beforeEach(() => {
        room = new Room(room_name);
    });

    it("room can have a name", () => {
        expect(room.getName()).toEqual(room_name);
    });
    it("room can be available", () => {
        expect(room.isAvailable()).toEqual(true);
    });


    describe("Entering a room", () => {
        it("room becomes unavailable", () => {
            room.enter(meeting, team);
            expect(room.isAvailable()).toEqual(false);
        });
        it("raises error when unavailable room is entered", () => {
            room.enter(meeting, team);
            expect(() => room.enter(meeting, team)).toThrowError("Room is occupied");
        });
        it("displays team name and meeting name", () => {
            room.enter(meeting, team);
            var notice = `Team ${team} is having a meeting on ${meeting} in room ${room_name}.`;
            expect(room.displayNotice()).toEqual(notice);
        })
    });

    describe("Leaving a room", () => {
        it("room becomes available", () => {
            room.enter(meeting, team);
            room.leave();
            expect(room.isAvailable()).toEqual(true);
        });
        it("sends a text to Client about room availability", () => {
            room.enter(meeting, team);
            room.leave();

            var textMessageSpy = {
                sendText: () => {
                    return "Text sent"
                }
            }

            spyOn(textMessageSpy, 'sendText').and.callThrough();
            expect(textMessageSpy.sendText).toHaveBeenCalled();
            expect(textMessageSpy.sendText()).toEqual("Text sent")
        })
    });


})