const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/modelRegister");
users.use(cors());

users.post("/", (req, res) => {
  const today = new Date();
    const ss = today.toDateString()+" "+today.getHours() +":"+today.getMinutes()+":" +today.getSeconds();
    const userData = {
      First_Name: req.body.first_name,
      Last_Name: req.body.last_name,
      Email: req.body.email,
      Password: req.body.password,
      Role:req.body.role,
      Created: ss
    };
  
    User.findOne({
      where: {
        Email: req.body.email,
        Role: req.body.role
        
      }
    })
      //TODO bcrypt
      .then(user => {
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.Password = hash;
            User.create(userData)
              .then(user => {
                res.json(user.ID);
              })
              .catch(err => {
                res.send("error: " + err);
              });
          });
        } else {
          res.json({ error: "User already exists" });
        }
      })
      .catch(err => {
        res.send("error: " + err);
      });
  });

  module.exports = users;