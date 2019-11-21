
import React, { Component } from 'react';
import S3FileUpload from 'react-s3';

const config = {
  bucketName: 'cmpe272medico',
  region: 'us-east-2',
  accessKeyId: 'AKIAITPN5ZT4R3HY77IQ',
  secretAccessKey: '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',
}

class UploadMedicalHistory extends Component {

    constructor() {
        super();
        this.state = {
          selectedFile: null,
          FileName: "",
          FileDownloadLink:"",
            response: []
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
      }

      onChangeHandler= async event =>{
          this.setState({
          selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
      }

      onClickHandler = async event =>{
        event.preventDefault();
        try {
          S3FileUpload.uploadFile(this.state.selectedFile, config)
          .then((data)=>{
            console.log('hi',data);
            this.setState({
              FileName: data.key
              //FileDownloadLink: data.location
            })
            //console.log(this.state.email,this.state.FileName, this.state.FileDownloadLink); 
            
          }) 
        }
        catch(error){
          console.log(error.message);
          alert(error);
        }
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