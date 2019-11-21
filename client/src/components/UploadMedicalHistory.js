
import React, { Component } from 'react';


class UploadMedicalHistory extends Component {

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
          Degree: this.state.Degree,
          Specialization: this.state.Specialization,
          YearOfExperience: this.state.YearOfExperience,
          Address: this.state.Address,
          Contact: this.state.Contact,
          Fee: this.state.Fee,
          Gender: this.state.Gender
        };
        console.log("Doctor info ",docProfile);
       /* register(newUser).then(res => {
          alert("Please Login with this ID "+ res);
          this.props.history.push(`/login`);
        });*/
      }
    render() {
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto" style={{textAlign:'left'}}>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please upload your medical history in .png/.jpg format</h1>
              <label>Upload your file</label><br />
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" className="button is-primary" onClick={this.onClickHandler}>Upload File</button>
            </form>
          </div>
        </div>
      </div>
        
        )
    }
}

export default UploadMedicalHistory;