import React, { Component } from 'react'
import { Cashierreturn } from "./UserFunctions";
import { feecollected } from "./UserFunctions";
import "./sh.css"
export default class Cashier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cashierdata:[]

        };
      }

      componentDidMount() {
        
        Cashierreturn()
          .then(res => {
            //console.log("all cards ", res.data);
            this.setState({
              cashierdata: res.data
            });
          })
          .catch(err => {
            alert(err);
          });
      }


      onclick=(event)=>{
        feecollected(event.target.id)
        .then(res => {
            console.log("Pateint checked ", res);
            alert("Fees collected");
           window.location.reload();
          })
          .catch(err => {
            alert(err);
          });
    }
    render() {
        return (
        <div className="container" >
        <div>
        {this.state.cashierdata.map(response => (
        <div
                  class="card5 col-md-3"
                  style={{
                    marginTop:'2%',marginBottom:'2%',
                    border: "1px solid brown",
                    boxShadow: "1px 1px 10px 2px",
                    marginRight:'3%',
                    marginBottom:'3%'
                  }}
                >     
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                      Booking ID : {response.BookingID}
                    </li>
                    <li class="list-group-item">
                      Patient Name : {response.PatientName}
                    </li>
                    <li class="list-group-item">
                      Doctor Name : {response.DoctorName}
                    </li>
                    <li class="list-group-item">Appointment Date :{response.AppointmentDate}</li>
                    <li class="list-group-item">Appointment Time :{response.AppointmentTime}</li>
                    <li class="list-group-item">
                    Fee : {response.Fee}
                    </li>
                    <li class="list-group-item">
                    <button class="btn btn-primary" id={response.BookingID} onClick={this.onclick}>Fees Collected!!</button>        
                    </li>
                  </ul>
                </div>
        ))}
        </div>
      </div>
            
        )
    }
}
