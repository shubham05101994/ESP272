import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./sh.css"
import { withOktaAuth } from '@okta/okta-react';

class Landing extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: this.props.authState.isAuthenticated,
      isLogIn: localStorage.getItem("isLogIn")
    }

  }

  logOut(e) {
    e.preventDefault();
    /*  localStorage.removeItem("usertoken");
     localStorage.removeItem("logintype");
     localStorage.removeItem("facebookresponeemail");
     localStorage.removeItem("facebookresponename");
     localStorage.removeItem("email"); */
    localStorage.removeItem("role");
    localStorage.setItem("isLogIn", 'false');
    this.props.authService.logout();
    this.setState({
      isAuthenticated: false,
      isLogIn : 'false'
    })
    console.log("loging out" + this.props.authState.isAuthenticated);
    //this.props.history.push(`/`);
  }

  render() {

    /*  const button = this.state.isLogIn ? <Link className="nav-link" onClick={() => {this.logOut.bind(this)}}>Logout</Link> : <Link className="nav-link" to="/login">Login</Link>; */

    const loginLink = (<Link to="/login" className="nav-link">
      Login
        </Link>);


   /*  const loginRegLink = ( 
     ); */

    const doctor = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/doctorregister" className="nav-link">
            Doctor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/doctorappointments" className="nav-link">
            Upcoming Appointments
          </Link>
        </li>
      </ul>
    );
    const patient = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/patient" className="nav-link">
            Patient
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/patientbooking" className="nav-link">
            Booking Details
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/medicalhistory" className="nav-link">
            Upload Reports
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ChatBot" className="nav-link">
            ChatBot
          </Link>
        </li>
      </ul>
    );
    const cashier = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/cashier" className="nav-link">
            Cashier
          </Link>
        </li>
      </ul>
    );
    /*  const adminLink = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
        </ul>
      );
      const userdashboard =(
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/userdashboard" className="nav-link">
              UserDashboard
            </Link>
          </li>               
        </ul>
      );*/
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>

      </ul>
    );

    const navButton = (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample10"
        aria-controls="navbarsExample10"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
    );
    /* if(this.state.isLogIn){
      <ul className="navbar-nav">
      <li className="nav-item">
        {loginLink}
      </li>
    </ul>
    } else {
      <ul>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
        </a>
        </li>
      </ul>
    } */

    return (
      <nav className="navbar navbar-expand-lg navbar-dark nav_color navcolo rounded">
        {navButton}
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {/* {localStorage.usertoken || localStorage.facebookresponeemail ? userLink : loginRegLink} */}
          {/* {localStorage.isLogIn ? userLink : loginRegLink} */}


          { this.state.isLogIn == 'false'  &&
            <ul className="navbar-nav">
              <li className="nav-item">
                {loginLink}
              </li>
            </ul>
          }
          {localStorage.role == "Doctor" ? doctor : ""}
          {localStorage.role == "Patient" ? patient : ""}
          {localStorage.role == "Cashier" ? cashier : ""}
          {
            this.state.isLogIn == 'true' &&
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                  Logout
            </a>
              </li>
            </ul>
          }
          

        </div>
      </nav>
    );
  }
}

export default withOktaAuth(withRouter(Landing));
