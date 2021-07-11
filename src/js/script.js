const roomNameInput = document.querySelector('#add-form');
const roomNameSubmitBtn = document.querySelector('#add-btn');
const roomsList = document.querySelector('.rooms-list')


document.addEventListener("DOMContentLoaded", () => {
    const office = new Office();
    let i = 0;

    const createRoom = () => {
        let room_name = roomNameInput.value;
        let room = new Room(room_name);
        office.addRoom(room);
        if (room_name) {
            displayRoom(room);
        }
    }

    roomNameSubmitBtn.addEventListener('click', createRoom);

    const displayRoom = (room) => {
        i = i + 1;
        let roomCard = document.createElement('div')
        var roomCardContent = `
        <div class="card border-light mb-3" style="max-width: 18rem;">
            <div class="card-body col">
                <i class="fas fa-circle available" id="status_${i}"></i>
                <h5 class="card-title">${room.getName()}</h5>
                <div id="myGroup">
                    <a href="#" class="btn btn-primary enter" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${i}" aria-expanded="false" aria-controls="collapse_${i}" id="enter_${i}">Enter</a>
                    <a href="#" class="btn btn-light leave" id="leave_${i}">Leave</a>
                    <div class="collapse mt-2" id="collapse_${i}" data-parent="#myGroup">
                        <form class="card" id="enter_form_${i}">
                            <input type="text" class="enter-form" id="meeting_${i}" placeholder="meeting name" required>
                            <input type="text" class="enter-form mt-1 mb-1" id="team_${i}" placeholder="team name" required>
                            <input type="submit" class="btn btn-dark enter-now" role="button" id="enterNow_${i}" value="Enter now">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
        roomCard.innerHTML = roomCardContent;
        roomsList.append(roomCard);

        roomNameInput.value = '';

        submitNotice(room, i)
    }

    const updateAvailability = (room, id_num) => {
        const availableStatusIcon = document.querySelector(`#status_${id_num}`)
        // console.log(room.isAvailable())
        // console.log(availableStatusIcon)

        if (!room.isAvailable()) {
            return availableStatusIcon.classList.add('unavailable')
        } else {
            return availableStatusIcon.classList.remove('unavailable')
        }
    }

    const submitNotice = (room, id_num) => {
        const enterRoomNowBtn = document.querySelector(`#enterNow_${id_num}`)

        enterRoomNowBtn.addEventListener('click', (e) => {
            e.preventDefault()

            const meetingNameInput = document.getElementById(`meeting_${id_num}`).value;
            const teamNameInput = document.getElementById(`team_${id_num}`).value;
            const div = document.querySelector('.notices')
            let para = document.createElement('p')
            para.setAttribute('id', `p_${id_num}`)

            para.innerText = room.enter(meetingNameInput, teamNameInput)
            updateAvailability(room, id_num)
            div.append(para)
            document.forms[`enter_form_${id_num}`].reset() // clears form fields; resets form
            leaveRoom(room, i)
        })
    }

    const leaveRoom = (room, id_num) => {
        const leaveRoomNowBtn = document.querySelector(`#leave_${id_num}`)
        const notice = document.querySelector(`#p_${id_num}`)

        leaveRoomNowBtn.addEventListener('click', () => {
            room.leave()
            notice.remove()
            updateAvailability(room, id_num)
            // console.log(notice)
        })
    }

});