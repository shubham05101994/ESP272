import React, { Component } from 'react'
import { doctorappointments } from "./UserFunctions";
import { patientchecked } from "./UserFunctions";
class DoctorAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            doctorappointment:[]
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
            <h1>Here are your Upcoming Apointents</h1>
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
                    
                  </ul>
                  <div class="card-body">
                    <button class="btn btn-primary" id={response.BookingID} onClick={this.onclick}>Patient Checked!!</button>
                    
  </div>
                </div>
                
              ))}
              
            </div>
          </div>
         );
    }
}
 
export default DoctorAppointment;