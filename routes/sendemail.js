const express = require("express");
const sendemailapp = express.Router();
const cors = require("cors");
sendemailapp.use(cors());
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'medicoconnect272esp@gmail.com',
        pass: 'medico@123'
    }
    });
    AppointmentDate:"Sat Nov 23 2019"
    AppointmentTime:"12.30 PM"
    DoctorEmail:"shubhamkatariya05@gmail.com"
    DoctorName:"Shubham SJSU"
sendemailapp.post("/", (req, res) => {
    const output1 = `
    <p>You have new Appointment</p>
    <h3>Appintment details Details</h3>
    <ul>  
      <li>Patient Name: ${req.body.PatientEmail}</li>
      <li>Appointment Date: ${req.body.AppointmentDate}</li>
      <li>Appointment Time: ${req.body.AppointmentTime}</li>
    </ul>
  `;
  const output2 = `
    <p>You have made new Appointment</p>
    <h3>Appintment Details</h3>
    <ul>  
      <li>Doctor Name: ${req.body.DoctorName}</li>
      <li>Doctor Email: ${req.body.DoctorEmail}</li>
      <li>Appointment Date: ${req.body.AppointmentDate}</li>
      <li>Appointment Time: ${req.body.AppointmentTime}</li>
    </ul>
  `;
    //DoctorID: req.body.DoctorID,
    //AppointmentDate: req.body.AppointmentDate,
    //AppointmentTime: req.body.AppointmentTime,
        var mailOptions = {
            from: 'medicoconnect272esp@gmail.com',
            to: req.body.DoctorEmail,
            subject: 'Sending Email using Node.js',
            html: output1       
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            res.send(info.response);
        }
        });

        var mailOptions = {
            from: 'medicoconnect272esp@gmail.com',
            to: req.body.PatientEmail,
            subject: 'Sending Email using Node.js',
            html: output2
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            res.send(info.response);
        }
        });

    });

    module.exports=sendemailapp;