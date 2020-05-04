const express = require("express");
const doctorprofile = express.Router();
const cors = require("cors");
const db = require("../database/db.js");
doctorprofile.use(cors());


doctorprofile.post("/", (req, res) => {
    //const today = new Date();
    
    const doctorData = {
      DrID:req.body.DrID,
      Degree: req.body.Degree,
      Specialization: req.body.Specialization,
      YearOfExperience: req.body.YearOfExperience,
      Address: req.body.Address,
      Contact:req.body.Contact,
      Gender: req.body.Gender,
      Fee:req.body.Fee
    };

    
    db.sequelize.query('insert into MedicoConnect.DoctorInfos(DrID,Degree,Specialization,YearOfExperience,Address,Contact,Gender,Fee) '+
    ' values(:DrID,:Degree,:Specialization,:YearOfExperience,:Address,:Contact,:Gender,:Fee)', {
      replacements: {
        DrID:req.body.DrID,
        Degree: req.body.Degree,
        Specialization: req.body.Specialization,
        YearOfExperience: req.body.YearOfExperience,
        Address: req.body.Address,
        Contact:req.body.Contact,
        Gender: req.body.Gender,
        Fee:req.body.Fee
      }
    })
    .then(([results]) => {
      res.json(results);
    
  })
  .catch(err => {
      res.send("error: " + err);
    });
});

doctorprofile.get("/doctorInfo", (req, res) => {
  db.sequelize
  .query('select * from MedicoConnect.DoctorInfos Where DrID = (:DrID)', {
    replacements: {DrID: req.query.DrID}
  })
  .then(([results]) => {
      res.send(results);
      //console.log(results);
  })
  .catch(err => {
      res.send("error: " + err);
    });
});


module.exports=doctorprofile;