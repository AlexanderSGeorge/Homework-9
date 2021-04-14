// Load the moment package as a module. The package is very popular for managing dates and times.
const moment = require("moment");
//current date
console.log(moment().format("dddd, MMMM Do YYYY"));
//Years since 1976, November 26th.
console.log(moment("1976-11-26").fromNow());


