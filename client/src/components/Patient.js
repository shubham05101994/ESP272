import React, { Component } from "react";
import { returnallspecialization } from "./UserFunctions";
import { returnallspecificdoctor } from "./UserFunctions";
import { returnallspecificdoctordetails } from "./UserFunctions";
import { insertappointmentinfo } from "./UserFunctions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class Patient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      specialization: [],
      specialization_selected: "",
      doctor_name: [],
      doctor_details:[],
      doctor_id_selected: "",
      startDate: new Date(),
      time:"",
      consent:"",
      PatientID:""
    };
  }
  componentDidMount() {
    returnallspecialization()
      .then(res => {
        console.log("check ", res.data);
        this.setState({
          specialization: res.data
        });
      })
      .catch(err => {
        alert(err);
      });
  }
  onInputChangeconsent = event =>{
    this.setState({
      consent: event.target.value
    });
  };
  onInputChange = event => {
    this.setState({
      specialization_selected: event.target.value
    });
    
      returnallspecificdoctor(event.target.value)
        .then(res => {
          console.log("check ", res.data);
          this.setState({
            doctor_name: res.data
          });
        })
        .catch(err => {
          alert(err);
        });
    };
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
    onInputChangeDoctorName = event => {
      this.setState({
        doctor_id_selected: event.target.value
      });
      
        returnallspecificdoctordetails(event.target.value)
          .then(res => {
            //console.log("check ", res.data[0]);
            this.setState({
              doctor_details: res.data[0]
            });
          })
          .catch(err => {
            alert(err);
          });
      };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    let appointmentdetails = {
      PatientID:localStorage.ID,
      DoctorID:this.state.doctor_id_selected,
      date: this.state.startDate.toDateString(),
      time:this.state.time, 
      consent:this.state.consent
    };
    insertappointmentinfo(appointmentdetails)
    .then(res =>{
      
      if(res.status==200){
          alert("Appointment Booked");
          this.props.history.push(`/patientbooking`);
      }
      else{
        alert("Appointment Server Down");
      }
    });
    
    console.log("user info ", appointmentdetails);
    //register(newUser).then(res => {
    //alert("Please Login with this ID "+ res);
    //  this.props.history.push(`/login`);
    // });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto" style={{ textAlign: "left" }}>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">
                Make an appointment of Doctor
              </h1>

              <div className="form-group">
                <label htmlFor="doctorspecialization">
                  Doctor Specialization
                </label>
                <select
                  className="form-control"
                  id="Specializationz"
                  value={this.state.value}
                  onChange={this.onInputChange}
                  placeholder="Select Specialzation"
                >
                  <option value="default" defaultValue>
                    Select an Option
                  </option>
                  {this.state.specialization.map(response => (
                    <option
                      key={response.Specialization}
                      value={response.Specialization}
                    >
                      {response.Specialization}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="doctorname">Doctor Name</label>
                <select
                  className="form-control"
                  id="Specialization1"
                  value={this.state.id}
                  onChange={this.onInputChangeDoctorName}
                  
                  
                >
                  <option value="default" defaultValue>
                    Select an Option
                  </option>
                  {this.state.doctor_name.map(response => (
                    <option id={response.ID}
                      key={response.ID}
                      value={response.ID}
                      
                    >
                      {response.Name}
                    </option>
                  ))}
                </select>
              </div>
              <h3>Complete Doctor Profile</h3>
              <div className="form-group" style={{ border: "1px solid brown",padding:"2%" }}>
                <div><h6 htmlFor="">Degree :{this.state.doctor_details.Degree}</h6></div>
                <div><h6 htmlFor="">Year of Experience :{this.state.doctor_details.YearOfExperience}</h6></div>
                <div><h6 htmlFor="">Address :{this.state.doctor_details.Address}</h6></div>
                <div><h6 htmlFor="">Contact :{this.state.doctor_details.Contact}</h6></div>
                <div><h6 htmlFor="">Fee :{this.state.doctor_details.Fee}</h6></div>
                <div><h6 htmlFor="">Visiting Hours :{this.state.doctor_details.VisitingHours}</h6></div>
              </div>
              <div className="form-group">
                <label htmlFor="date">Select Date :</label>
                  <DatePicker className="form-control" selected={this.state.startDate} onChange={this.handleChange}/>  
              </div>
              <div className="form-group">
                <label htmlFor="date">Enter Time :</label>
                <input
                  type="text"
                  className="form-control"
                  name="time"
                  placeholder="Enter time"
                  value={this.state.time}
                  onChange={this.onChange}
                /> 
              </div>
              
              <div className="form-group">
                <label htmlFor="roles">Consent to allow Doctor to Access Medical History</label>
                <select
                  className="form-control"
                  id="access"
                  value={this.state.value}
                  onChange={this.onInputChangeconsent}
                  placeholder="Enter usertype"
                >
                  <option value="default" defaultValue>
                    Select Consent
                  </option>
                   <option value="No">
                    No
                  </option>
                  
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Make an Appointment!
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
