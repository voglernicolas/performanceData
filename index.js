const si = require('systeminformation');

// // promises style - new since version 3
// si.cpu()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// si.cpu()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
/*
si.cpuTemperature().then(data => console.log(data));
console.log("\n\n");
*/

(function() {
    si.cpuCurrentspeed().then(data => console.log(data));
})()



