var moment = require("moment");

var getCurrentDate = () => {
  var wrapped = moment(new Date());
  console.log("Wrapped :", wrapped);
  console.log(
    "Date Format :",
    moment(new Date()).format("dddd"),
    ",",
    moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")
  );
};

getCurrentDate();
