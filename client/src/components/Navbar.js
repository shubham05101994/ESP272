import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./sh.css"
class Landing extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    localStorage.removeItem("logintype");
    localStorage.removeItem("facebookresponeemail");
    localStorage.removeItem("facebookresponename");
    localStorage.removeItem("email");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    );

    const adminLink = (
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
    );
    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        
        <li className="nav-item">
          <Link to="/chatbot" className="nav-link">
            Chatbot
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
               
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark nav_color navcolo rounded">
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
          {localStorage.usertoken || localStorage.facebookresponeemail ? userdashboard : ""}
          {localStorage.email=="admin@cloud.com" ? adminLink : ""}
          
        </div>
      </nav>
    );
  }
}

export default withRouter(Landing);
