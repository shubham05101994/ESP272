import React, { Component } from 'react'
import { Cashierreturn } from "./UserFunctions";
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


      onclick=()=>{
        //console.log(event.target.id);
        alert("Fees Paid");
    }
    render() {
        return (
        <div className="container" style={{display:'flex'}}>
        {this.state.cashierdata.map(response => (
        <div
                  class="card2 col-md-3"
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
                    <button class="btn btn-primary" onClick={this.onclick}>Fees Collected!!</button>        
                    </li>
                  </ul>
                </div>
        ))}
      </div>
            
        )
    }
}
