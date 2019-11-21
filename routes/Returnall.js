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


module.exports = returnall;