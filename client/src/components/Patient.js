import React, { Component } from "react";


class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            data:['shubham','katariya']
        }
    }


    onInputChange = event => {
        console.log(event.target.value);
        this.setState({
          role: event.target.value
        });
        
      }
      onChange=(e) =>{
        this.setState({ [e.target.name]: e.target.value });
      }
      onSubmit=(e) => {
        e.preventDefault();
    
        const newUser = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          password: this.state.password,
          role: this.state.role
        };
        console.log("user info ",newUser);
        //register(newUser).then(res => {
          //alert("Please Login with this ID "+ res);
        //  this.props.history.push(`/login`);
       // });
      }


    render() { 
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto" style={{textAlign:'left'}}>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Make an appointment of Doctor</h1>
              
              <div className="form-group">
              <label htmlFor="doctorspecialization">Doctor Specialization</label>
              <select className="form-control" id="Specialization" value={this.state.value} onChange={this.onInputChange} placeholder="Select Specialzation" >
                    {this.state.data.map((team) => <option key={team} value={team}>{team}</option>)}
              </select>    
            </div>
              
            <div className="form-group">
              <label htmlFor="doctorname">Doctor Name</label>
              <select className="form-control" id="Specialization" value={this.state.value} onChange={this.onInputChange} placeholder="Select Specialzation" >
                    {this.state.data.map((team) => <option key={team} value={team}>{team}</option>)}
              </select>    
            </div>
            <h3>Complete Doctor Profile</h3>
            <div className="form-group" style={{border:'1px solid brown'}}>
               
              <h6 htmlFor="">Degree:Degree</h6>
              <h6 htmlFor="">Year of Experience:Year of Experience</h6>
              <h6 htmlFor="">Consultancy Charge:Consultancy Charge</h6>
              <h6 htmlFor="">Visiting Hours:Visiting Hours</h6>
            </div>
              
              <div className="form-group">
              <label htmlFor="roles">Access Records</label>
                    <select className="form-control" id="access" value={this.state.value} onChange={this.onInputChange} 
                         placeholder="Enter usertype">
                        <option value="default" defaultValue>Disable</option>  
                        <option value="Doctor">Enable</option>
                        
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