import React, { Component } from 'react';
import { insertdoctorprofile } from "./UserFunctions";

class DoctorRegister extends Component {

    constructor() {
        super();
        this.state = {
            Degree: "",
            Specialization: "",
            YearOfExperience: "",
            Address: "",
            Contact: "",
            Fee:"",
            Gender:"",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }

      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit(e) {
        e.preventDefault();
    
        const docProfile = {
          DrID:localStorage.ID,
          Degree: this.state.Degree,
          Specialization: this.state.Specialization,
          YearOfExperience: this.state.YearOfExperience,
          Address: this.state.Address,
          Contact: this.state.Contact,
          Fee: this.state.Fee,
          Gender: this.state.Gender
        };
        console.log("Doctor info ",docProfile);
        insertdoctorprofile(docProfile)
        .then(res =>{
          
          if(res.status==200){
              alert("Profile Inserted Successfully");
              this.props.history.push(`/`);
          }
          else{
            alert("Profile didnotinserted");
          }
        });
      }
    render() {
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto" style={{textAlign:'left'}}>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please fill the form to complete your profile</h1>
              <div className="form-group">
                <label htmlFor="Degree">Degree</label>
                <input
                  type="text"
                  className="form-control"
                  name="Degree"
                  placeholder="Enter your Degree"
                  value={this.state.Degree}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Specialization">Specialization</label>
                <input
                  type="text"
                  className="form-control"
                  name="Specialization"
                  placeholder="Enter your Specialization"
                  value={this.state.Specialization}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="YearOfExperience">Experience</label>
                <input
                  type="text"
                  className="form-control"
                  name="YearOfExperience"
                  placeholder="Enter total year of Experience"
                  value={this.state.YearOfExperience}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="Address"
                  placeholder="Enter clinic Address"
                  value={this.state.Address}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Contact">Contact</label>
                <input
                  type="text"
                  className="form-control"
                  name="Contact"
                  placeholder="Enter Contact number"
                  value={this.state.Contact}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Fee">Fee</label>
                <input
                  type="text"
                  className="form-control"
                  name="Fee"
                  placeholder="Enter consultancy charge"
                  value={this.state.Fee}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
              <label htmlFor="Gender">Gender</label>
                    <select className="form-control" name="Gender" value={this.state.value} onChange={this.onChange}>
                        <option value="default" defaultValue>Select</option>  
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                    </select>
                </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block">
                Upload Profile!
              </button>
            </form>
          </div>
        </div>
      </div>
        
        )
    }
}

export default DoctorRegister;