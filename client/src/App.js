import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import './App.css';
import { Security, SecureRoute, ImplicitCallback, LoginCallback} from '@okta/okta-react';

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
/* import Login from "./components/Login"; */
import Login from "./components/auth/Login"
import Home from "./components/Home"
import Register from "./components/Register";
import DoctorRegister from "./components/DoctorRegister";
import Cashier from "./components/Cashier";
import Patient from "./components/Patient";
import PatientBooking from "./components/PatientBookings";
import DoctorAppointment from "./components/DoctorAppointments";
import UploadPatientHistory from "./components/UploadMedicalHistory";
import Doctorviewreports from "./components/doctorviewreports";
import Chatbbot from "./components/Chatbbot";
import Footer from "./components/Footer";

export const history=require('history').createBrowserHistory()


class App extends Component {

   constructor(props) {
     super(props);
     this.onAuthRequired = this.onAuthRequired.bind(this);
   }
   
   onAuthRequired() {
    history.push('/login');
  }
  
  render() {
    return (
      <div>
        
        <Router history={history}>

          <Security issuer='https://dev-797267.okta.com/oauth2/default'
            clientId='0oaagvaiqddotHkMn4x6'
            redirectUri={window.location.origin + '/implicit/callback'}
            onAuthRequired={this.onAuthRequired}
            pkce={true} >
            <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} /> 
              <div className="container">
             
               
                {/*   <Route exact path="/login" component={Login} /> */}
              {/*  <SecureRoute exact path="/" component={Home} />  */}
            
                <Route path='/login' render={() => <Login baseUrl='https://dev-797267.okta.com' />} />
                <Route path='/implicit/callback' component={LoginCallback} />
                <Route exact path="/doctorregister" component={DoctorRegister} />
                {/*  <Route exact path="/register" component={Register} /> */}
                <Route exact path="/cashier" component={Cashier} />
                <Route exact path="/patient" component={Patient} />
                <Route exact path="/patientbooking" component={PatientBooking} />
                <Route exact path="/doctorappointments" component={DoctorAppointment} />
                <Route exact path="/medicalhistory" component={UploadPatientHistory} />
                <Route exact path="/doctorreportview" component={Doctorviewreports} /> 
                <Route exact path="/ChatBot" component={Chatbbot} />
              </div>
            </div>
          </Security>
        </Router>
      </div>

    );
  }
}

export default App;
