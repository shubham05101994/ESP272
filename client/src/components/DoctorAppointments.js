import React, { Component } from 'react'
import { doctorappointments } from "./UserFunctions";
import { patientchecked } from "./UserFunctions";
import Doctorviewreports from "./doctorviewreports";
import { Link, withRouter } from "react-router-dom";
class DoctorAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            doctorappointment:[],
            data:'bro'
         };
    }

    componentDidMount() {
        let id = localStorage.ID;
        doctorappointments(id)
          .then(res => {
            console.log("all cards ", res.data);
            this.setState({
                doctorappointment: res.data
            });
          })
          .catch(err => {
            alert(err);
          });
      }
    onclick=(event)=>{
        //console.log(event.target.id);
        patientchecked(event.target.id)
        .then(res => {
            console.log("Pateint checked ", res);
           window.location.reload();
          })
          .catch(err => {
            alert(err);
          });
    }
  
    render() { 
      
        return ( 
            <div>
              <div style={{marginTop:'2%',marginBottom:'2%'}}>
            <h1>Here are your Upcoming Apointments</h1>
            </div>
            <div class="">
            
              {this.state.doctorappointment.map(response => (
               
               <div
                  class="card col-md-3"
                  style={{
                    
                    border: "1px solid brown",
                    boxShadow: "1px 1px 10px 2px",
                    marginRight:'3%',
                    marginBottom:'3%'
                  }}
                >
                  
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                      Patient Name : {response.PatientName}
                    </li>
                    <li class="list-group-item">Appointment Date :{response.AppointmentDate}</li>
                    <li class="list-group-item">Appointment Time :{response.AppointmentTime}</li>
                    <li class="list-group-item">
                    Fee :{response.Fee}
                    </li>
                    <li class="list-group-item">
                    Patient Checked :{response.PatientChecked}
                    </li>
                    <li class="list-group-item">
                    <button class="btn btn-primary" id={response.BookingID} onClick={this.onclick}>Patient Checked!!</button>        
                    </li>
                    <li id={response.PatientID} class="list-group-item">
                    
                    {
                      (response.Concent=="Yes")?
                      <Link to={{pathname:"/doctorreportview",data:response.PatientID}} class="btn btn-primary">
                       Reports
                    </Link>
                    :""
                    }
                    </li>
                  </ul>
                  
                 
                </div>
                
              ))}
             
            </div>
          </div>
         );
    }
}
 
export default DoctorAppointment;