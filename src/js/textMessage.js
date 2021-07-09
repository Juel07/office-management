// var config = require('../config');
// var client = require('twilio')(config.accountSid, config.authToken);

// class textMessage {
//     constructor() {
//         this.from = "+12017201958";
//         this.mobileNumber = ENV["MOBILE_NUMBER"];
//     }

//     sendText(room_name) {
//         let message = `Meeting room ${room_name} is now available`;

//         client.messages.create({
//             from: this.from,
//             to: this.mobileNumber,
//             body: message
//         })
//             .then(function (res) {
//                 console.log(res.body);
//             })
//             .catch(function (err) {
//                 console.log(err);
//             });
//     }
// }

