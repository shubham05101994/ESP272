const express = require("express");
const insertappointment = express.Router();
const cors = require("cors");
insertappointment.use(cors());
const db = require("../database/db.js");

insertappointment.post("/", (req, res) => {
    const userfileData = {
        PatientID: req.body.PatientID,
        DoctorID: req.body.DoctorID,
        AppointmentDate: req.body.AppointmentDate,
        AppointmentTime: req.body.AppointmentTime,
        Consent: req.body.Consent
    };

    db.sequelize.query('insert into MedicoConnect.Appointments(PatientID, DoctorID,AppointmentDate,AppointmentTime,Fee,Concent) values (:PatientID,:DoctorID,:AppointmentDate,:AppointmentTime,(SELECT Fee FROM MedicoConnect.DoctorInfos WHERE DrID = :DoctorID),:Consent)', {
        replacements: {
            PatientID: req.body.PatientID,
            DoctorID: req.body.DoctorID,
            AppointmentDate: req.body.AppointmentDate,
            AppointmentTime: req.body.AppointmentTime,
            Consent: req.body.Consent
        }
      })
    .then(([results]) => {
        res.json(results);
      
    })
    .catch(err => {
        res.send("error: " + err);
      });
  });

  module.exports=insertappointment;