var express = require("express");
var cors = require("cors");
//var bodyParser = require('body-parser')
var app = express();
var port = process.env.PORT || 5000;

app.use(express.json()) ;
app.use(cors());
app.use(
  express.urlencoded({
    extended: false
  })
); 

var Users = require("./routes/Register");
var Returnall = require("./routes/Returnall");
var InsertAppointmentInfo =require("./routes/InsertAppointment");
var DoctorProfileRegister = require("./routes/DocterProfileRegister");
app.use("/register", Users);
app.use("/returnall", Returnall);
app.use("/insertappointmentinfo", InsertAppointmentInfo);
app.use("/doctorprofile", DoctorProfileRegister);

app.listen(port, function() {
  console.log("Server is running on port: " + port);
});
