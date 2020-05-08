import React, { Component } from "react";
import Footer from "./Footer";
import logo from "../Medico.jpg"
import { withOktaAuth } from '@okta/okta-react';
import { jwt_decode } from 'jwt-decode';
import { returnUserID } from "./UserFunctions";
var jwtDecode = require('jwt-decode');

const landingPage = class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user : {}
    }
    
  }

  componentDidMount() {
    if (this.props.authService){
      this.props.authService.getUser().then(res => {
        console.log(res);
        this.setState({
          user: res
        })
      });
    }
    if (this.props.authService){
       this.props.authService.getIdToken().then(res => {
        if (res !== undefined){
          console.log(res);
          let idToken = res
          let decoded = jwtDecode(idToken);
          console.log(decoded);
          //console.log("My response emailID",decoded.email);
          localStorage.setItem("userEmail", decoded.email);
          returnUserID(localStorage.userEmail)
            .then(res => {
              console.log("Check USerID", res.data[0].ID);
              localStorage.setItem("ID",res.data[0].ID);
            })
            .catch(err => {
              alert(err);
            });
          if (decoded["isPatient"] == true){
            console.log(decoded["isPatient"]);
            localStorage.setItem("role", "Patient");
          } else if (decoded["isDoctor"] == true){
            console.log(decoded["isDoctor"]);
            localStorage.setItem("role", "Doctor");
          }
        }
       
      }) 
      //console.log(this.props.authService._authState)
      /* let accessToken = this.props.authState["accessToken"]
      let decoded = jwt_decode(accessToken);
      console.log(decoded); */
    }

    
   
  }  
  render() {
    const { user } = this.state;
    localStorage.setItem("isLogIn", 'false');
    return (
      <div className="">
        <div className="jumbotron color_back mt-4" style={{marginBottom:'0px !important'}}>
          <div className="col-sm-8 mx-auto">

      {
        user && <h4 className="text-center">Hello {user.name} , Greetings from </h4>
      }
      
      {
        !user && <h4 className="text-center"> Greetings from </h4>
      }

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
            <p>10.dafaf</p>
           



          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withOktaAuth(landingPage);
