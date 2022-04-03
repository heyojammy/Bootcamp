const casual = require('casual');

let name = casual.name;
let country = casual.country;
let city = casual.city; 
let phone = casual.phone;
let address = casual.address; 
let month = casual.month_name;


console.log(`Waht up, ${name}! 
 How was your trip to ${country}? 
 Did you get to visit ${city}? 
 I hope your trip was dank af. 
 Your digits still ${phone}? I'll hit u up sometime. 
 Also, there's some fresh bread waiting 4 u at: 
 
${address}
         
 Well, see ya later, homeboy. I'll be back around in ${month}. 
 Bye, dawg`);