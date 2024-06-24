const moment = require('moment');

// Get the current date and time
const now = moment();
console.log('The current date and time is:', now.format('MMMM Do YYYY, h:mm:ss a'));

//add 7 days to the current date
const future = moment().add(7, 'days');
console.log('Date after 7 days:', future.format('MMMM Do YYYY, h:mm:ss a'));

//subtract 3 months from the current date
const past = moment().subtract(3, 'months');
console.log('Date before 3 months:', past.format('MMMM Do YYYY, h:mm:ss a'));