import React, { Component } from 'react'


export default class DoctorRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Degree: "",
            Specialization: "",
            YearOfExperience: "",
            Address: "",
            Contact: "",
            profile:"",

        };
      }
    render() {
        return (
            
            <div className="container">
                <h2>Please fill the form to complete your profile</h2>
                <form onSubmit={this.handleSubmit}>
                <div class="form-row">
                    <div className="form-group col-md-5">
                    <input 
                        className="form-control" 
                        type="text"
                        id="Degree"
                        placeholder="Enter your Degree"
                        value={this.state.Degree}
                        onChange={this.onInputChange}
                    />
                    </div>
                </div>
                <div class="form-row">            
                    <div className="form-group col-md-5">
                    <input 
                    className="form-control" 
                    type="text"
                    id="Specialization"
                    placeholder="Enter your Specialization"
                    value={this.state.Specialization}
                    onChange={this.onInputChange}
                    />
                    </div>
                </div>
                <div class="form-row">
                    <div className="form-group col-md-5">
                    <input 
                        className="form-control" 
                        type="text"
                        id="YearOfExperience"
                        placeholder="Enter total year of experience"
                        value={this.state.YearOfExperience}
                        onChange={this.onInputChange}
                    />
                    </div>
                </div>
                <div class="form-row">
                    <div className="form-group col-md-5">
                    <input 
                        className="form-control" 
                        type="text"
                        id="Address"
                        placeholder="Enter Address"
                        value={this.state.Address}
                        onChange={this.onInputChange}
                    />
                    </div>
                </div>
                <div class="form-row">
                    <div className="form-group col-md-5">
                    <input 
                        className="form-control" 
                        type="text"
                        id="Contact"
                        placeholder="Enter your Contact"
                        value={this.state.Contact}
                        onChange={this.onInputChange}
                    />
                    </div>
                </div>
                <div class="form-row">
                <div className="form-group col-md-2">
                    <label for="profile">
                    Profile Type
                    </label>
                </div>
                    <div className="form-group col-md-3">
                    <select className="form-control" id="profile" value={this.state.value} onChange={this.onInputChange} 
                         placeholder="Enter usertype">
                        <option value="default" defaultValue>Select</option>  
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                        <option value="cashier">Cashier</option>
                    </select>
                </div>
                </div>
                <div className="form-group col-md-3">
                    <button className="btn btn-primary" type="submit">
                    Update Profile
                    </button>
                </div>
            </form>
            </div>
        
        )
    }
}
