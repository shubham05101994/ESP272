import React, { Component } from "react";
import Footer from "./Footer";
import logo from "../Medico.jpg"

class Landing extends Component {
  render() {
    return (
      <div className="">
        <div className="jumbotron color_back mt-4" style={{marginBottom:'0px !important'}}>
          <div className="col-sm-8 mx-auto">
          
            <h4 className="text-center">WELCOME TO</h4>
            <div>
            
            <h1 className="text-center name_app">MedicoConnect</h1>
            </div>
          </div>
        </div>
        <div className="jumbotron mt-4" style={{display:'flex'}}>
        <img src={logo} style={{width:'50%',height:'450px',borderRadius:'12%'}}></img>
          <div className="col-sm-5 mx-auto" style={{paddingTop:'4%'}}>
            
            <p>**NOTE: Short Feature List for MedicoConnect Application:</p>
            
            <p className="">1. Patient Login</p>
            <p className="">2. Doctor Login</p>
            <p className="">3. Cashier Login</p>
            <p className="">4. Social login (Facebook)</p>
            <p className="">5. Application performs Booking Appointment.</p>
            <p className="">6. Application performs Accepting Payments.</p>
            <p className="">7. Application performs Uploading/Deleting patient reports.</p>
            <p className="">8. Application performs Patient checked and Viewing report.</p>
            <p className="">9. Sending Appointment booked mails</p>
           



          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
