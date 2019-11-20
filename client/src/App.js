
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import DoctorRegister from "./components/DoctorRegister";
import Cashier from "./components/Cashier";
import PaymentInfo from "./components/PaymentInfo";
import Patient from "./components/Patient";
//import Profile from "./components/Profile";

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
            <Route exact path="/payment" component={PaymentInfo} />
            <Route exact path="/cashier" component={Cashier} />
            <Route exact path="/patient" component={Patient} />
           
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
