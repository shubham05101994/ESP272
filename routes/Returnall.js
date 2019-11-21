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
    db.sequelize.query('SELECT Degree, YearOfExperience, Address, Contact, Fee,VisitingHours from MedicoConnect.DoctorInfos where DrID = (:ID)', {
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
'WHERE A.PatientID = :ID;', {
<<<<<<< HEAD
    replacements: {ID: req.query.ID}
=======
    replacements: {ID: '5'}
>>>>>>> 6dd6fea39f0f14c75d6640ee4f703f898a876262
  })
.then(([results]) => {
    res.send(results);
})
.catch(err => {
    res.send("error: " + err);
  });
});

returnall.get("/doctorappointment", (req, res) => {
  db.sequelize.query('SELECT CONCAT(R.First_Name," ",R.Last_Name) as PatientName, A.AppointmentDate, A.AppointmentTime, A.Fee, A.PatientChecked' +
  ' from MedicoConnect.Appointments A INNER JOIN MedicoConnect.RegisterInfos R ' +
  ' ON A.DoctorID = R.ID ' +
  ' WHERE A.DoctorID = :ID', {
    replacements: {ID: req.query.ID}
  })
.then(([results]) => {
    res.send(results);
})
.catch(err => {
    res.send("error: " + err);
  });
});

module.exports = returnall;