const roomNameInput = document.querySelector('#add-form');
const roomNameSubmitBtn = document.querySelector('#add-btn');
const roomsList = document.querySelector('.rooms-list')
const availableStatusIcon = document.querySelector('#status')
const enterRoomNowBtn = document.querySelector('#enter-now')


document.addEventListener("DOMContentLoaded", () => {
    const office = new Office();
    let i = 0;

    const createRoom = () => {
        let room_name = roomNameInput.value;
        let room = new Room(room_name);
        console.log(room);
        office.addRoom(room);
        if(room_name)
        {
            displayRoom(room);
        }
    }

    roomNameSubmitBtn.addEventListener('click', createRoom );

    const displayRoom = (room) => {
        i = i + 1;
        let roomCard = document.createElement('div')
        var roomCardContent = `
        <div class="card border-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <i class="fas fa-circle" id="status"></i>
                <h5 class="card-title">${room.getName()}</h5>
                <div id="myGroup">
                    <a href="#" class="btn btn-primary enter" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_${i}" aria-expanded="false" aria-controls="collapse_${i}">Enter</a>
                    <a href="#" class="btn btn-light leave">Leave</a>
                    <div class="collapse mt-2" id="collapse_${i}" data-parent="#myGroup>
                        <div class="card">
                            <input type="text" class="enter-form" placeholder="meeting name">
                            <input type="text" class="enter-form mt-1 mb-1" placeholder="team name">
                            <button class="enter-now" class="btn btn-dark">Enter now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        roomCard.innerHTML = roomCardContent;
        roomsList.append(roomCard);
        roomCard.getElementsByClassName('enter-now')[0].addEventListener('click', () => console.log(`enter room_${i}`))

        roomNameInput.value = ''
    }
});