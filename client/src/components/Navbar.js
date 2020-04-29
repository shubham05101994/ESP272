import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./sh.css"
class Landing extends Component {

  constructor(props) {
    super(props);
    
  }
  
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    localStorage.removeItem("logintype");
    localStorage.removeItem("facebookresponeemail");
    localStorage.removeItem("facebookresponename");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    this.props.history.push(`/`);
  }

  render() {

    const loginLink = (<Link to="/login" className="nav-link">
      Login
  </Link>);


    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          {}
        </li>
       {/*  <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li> */}
      </ul>
    );
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
          {localStorage.usertoken || localStorage.facebookresponeemail ? userLink : loginRegLink}

          {localStorage.role == "Doctor" ? doctor : ""}
          {localStorage.role == "Patient" ? patient : ""}
          {localStorage.role == "Cashier" ? cashier : ""}

        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);
