const express = require("express");
const returnall = express.Router();
const cors = require("cors");
returnall.use(cors());
const db = require("../database/db.js");

returnall.get("/specialization", (req, res) => {
    db.sequelize
    .query("select distinct Specialization from MedicoConnect.DoctorInfos ")
    .then(([results]) => {
        res.send(results);
        console.log(results);
    })
    .catch(err => {
        res.send("error: " + err);
      });
});

returnall.get("/specificdoctor", (req, res) => {
      db.sequelize.query('select ID,concat(FIRST_NAME," ",LAST_NAME) as Name FROM MedicoConnect.RegisterInfos WHERE ID IN (SELECT DrID FROM MedicoConnect.DoctorInfos WHERE Specialization= (:Specialization))', {
        replacements: {Specialization: req.query.Specialization}
      })
    .then(([results]) => {
        res.send(results);
    })
    .catch(err => {
        res.send("error: " + err);
      });
});

returnall.get("/specificdoctordetails", (req, res) => {
    db.sequelize.query('SELECT r.Email,d.Degree, d.YearOfExperience, d.Address, d.Contact, d.Fee,d.VisitingHours from MedicoConnect.DoctorInfos d inner join MedicoConnect.RegisterInfos r on d.DrID=r.ID where DrID = (:ID)', {
      replacements: {ID: req.query.ID}
    })
  .then(([results]) => {
      res.send(results);
  })
  .catch(err => {
      res.send("error: " + err);
    });
});

returnall.get("/patientbookings", (req, res) => {
  db.sequelize.query(
'SELECT CONCAT(R.First_Name," ",R.Last_Name) as DoctorName, D.Specialization, D.Address, D.Contact, D.Gender, D.YearOfExperience, ' + 
'A.AppointmentDate, A.AppointmentTime, A.Fee, A.Concent ' + 
'from MedicoConnect.Appointments A INNER JOIN MedicoConnect.RegisterInfos R '+
'INNER JOIN MedicoConnect.DoctorInfos D ' +
' ON A.DoctorID = R.ID AND A.DoctorID = D.DrID ' +
'WHERE A.PatientID = :ID order by A.BookingID desc ', {
    replacements: {ID: req.query.ID}
  })
.then(([results]) => {
    res.send(results);
})
.catch(err => {
    res.send("error: " + err);
  });
});

returnall.get("/doctorappointment", (req, res) => {
  db.sequelize.query('SELECT A.BookingID,CONCAT(R.First_Name," ",R.Last_Name) as PatientName,A.PatientID,A.Concent, A.AppointmentDate, A.AppointmentTime, A.Fee, A.PatientChecked ' +
  ' from MedicoConnect.Appointments A INNER JOIN MedicoConnect.RegisterInfos R ' +
  ' ON A.PatientID = R.ID ' +
  ' WHERE A.DoctorID = :ID AND PatientChecked="No" order by A.BookingID desc', {
    replacements: {ID: req.query.ID}
  })
.then(([results]) => {
    res.send(results);
})
.catch(err => {
    res.send("error: " + err);
  });
});

returnall.post("/updatepatientcheck", (req, res) => {
  const today = new Date();
  

   let sk=req.body.BookingID;
   console.log(sk);
   db.sequelize.query('update MedicoConnect.Appointments set PatientChecked = "Yes" where BookingID = :BookingID', {
    replacements: {BookingID: req.body.BookingID}
  })
  .then(response => {
     res.send(response);
  })
  .catch(err => {
    console.log("error: " + err);
  });
});

//Casheir
returnall.get("/cashierdata", (req, res) => {
  db.sequelize
  //.query("SELECT PatientID,DoctorID,AppointmentDate,AppointmentTime,Fee FROM MedicoConnect.Appointments where PatientChecked='Yes'")
  .query("CALL get_cashier_detail();")
  .then((results) => {
      res.send(results);
      console.log(results);
  })
  .catch(err => {
      res.send("error: " + err);
    });
});

module.exports = returnall;