import React, { Component } from "react";
import { patientbookingdetails } from "./UserFunctions";
import "./sh.css"
class PatientBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingdetails: []
    };
  }
  componentDidMount() {
    let id = localStorage.ID;
    patientbookingdetails(id)
      .then(res => {
        console.log("all cards ", res.data);
        this.setState({
          bookingdetails: res.data
        });
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Here are your Booking Details</h1>
        <div class="">
        
          {this.state.bookingdetails.map(response => (
           
           <div
              class="card1 col-md-3"
              style={{
                
                border: "1px solid brown",
                boxShadow: "1px 1px 10px 2px",
                marginRight:'3%',
                marginBottom:'3%'
              }}
            >
              <div class="card-body">
                <h5 class="card-title">{response.Specialization}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  Doctor Name : {response.DoctorName}
                </li>
                <li class="list-group-item">Address :{response.Address}</li>
                <li class="list-group-item">Contact :{response.Contact}</li>
                <li class="list-group-item">
                  Doctor Gender :{response.Gender}
                </li>
                <li class="list-group-item">
                  Year of Experience :{response.YearOfExperience}
                </li>
                <li class="list-group-item">
                  Appointment Date :{response.AppointmentDate}
                </li>
                <li class="list-group-item">Fee :{response.Fee}</li>
                <li class="list-group-item">Consent :{response.Concent}</li>
              </ul>
            </div>
            
          ))}
          
        </div>
      </div>
    );
  }
}

export default PatientBooking;
