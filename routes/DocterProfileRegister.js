const express = require("express");
const doctorprofile = express.Router();
const cors = require("cors");
const db = require("../database/db.js");
doctorprofile.use(cors());


dashboard.post("/", (req, res) => {
    const today = new Date();
    const ss = today.toDateString()+" "+today.getHours() +":"+today.getMinutes()+":" +today.getSeconds();
    const doctorData = {
      First_Name: req.body.first_name,
      Last_Name: req.body.last_name,
      Email: req.body.email,
      Password: req.body.password,
      Role:req.body.role,
      Created: ss
    };
    db.sequelize
    .query("select File_description,sum(allcount) as count from user_login.user_file_details group by File_description order by sum(allcount) desc limit 5")
    .then(([results]) => {
        res.send(results);
        //console.log(results);
      })
    });