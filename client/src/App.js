
import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import DoctorRegister from "./components/DoctorRegister";
import Cashier from "./components/Cashier";
import Patient from "./components/Patient";
import PatientBooking from "./components/PatientBookings";
import DoctorAppointment from "./components/DoctorAppointments";
import UploadPatientHistory from "./components/UploadMedicalHistory";
import Doctorviewreports from "./components/doctorviewreports";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/doctorregister" component={DoctorRegister} />
            <Route exact path="/cashier" component={Cashier} />
            <Route exact path="/patient" component={Patient} />
            <Route exact path="/patientbooking" component={PatientBooking} />
            <Route exact path="/doctorappointments" component={DoctorAppointment} />
            <Route exact path="/medicalhistory" component={UploadPatientHistory} />
            <Route exact path="/doctorreportview" component={Doctorviewreports} />

           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
