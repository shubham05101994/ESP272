
import React, { Component } from 'react';


class UploadMedicalHistory extends Component {

    constructor() {
        super();
        this.state = {
          selectedFile: null
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
      }

      onChangeHandler= async event =>{
          this.setState({
          selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
      }


    render() {
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto" style={{textAlign:'left'}}>
          <h1 className="h3 mb-3 font-weight-normal">Please upload your medical history in .png/.jpg format</h1> 
          </div>
          <div className="col-md-4.5 mt-4 mx-auto" style={{textAlign:'left'}}>
            <form noValidate onSubmit={this.onSubmit}>
              <label>Upload your file</label><br />
                <input type="file" name="file"
                className="btn btn-lg btn-primary btn-block" onChange={this.onChangeHandler}/>
                <button type="submit"
                className="btn btn-lg btn-primary btn-block" onClick={this.onClickHandler}>Upload File</button>
            </form>
          </div>
        </div>
      </div>
        
        )
    }
}

export default UploadMedicalHistory;