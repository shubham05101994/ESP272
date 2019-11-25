
import React, { Component } from 'react';
import axios from 'axios';
import S3uplload from 'react-s3';


const config = {
  bucketName:  "cmpe272medico",
  region: "us-east-2",
  accessKeyId: "AKIAJ7XLPRT2WRZBKHDQ",
  secretAccessKey: "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"
}

class UploadMedicalHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedFile: null,
          email: "",
          FileName: "",
          FileDownloadLink: ""
        }
      }

      onChangeHandler= async event =>{
          this.setState({
          selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]);
      }

      onClickHandler = async event =>  {
        event.preventDefault();
        try{
          S3uplload.uploadFile(this.state.selectedFile, config)
          .then((data)=>{
            console.log(data);
            this.setState({
              email: localStorage.ID,
              FileName: data.key,
              FileDownloadLink: data.location
            })
           
            axios.post('https://puqmcxcpb0.execute-api.us-east-2.amazonaws.com/Prod/uploadfileinfo',this.state)
            .then(res=>{
              if(res){
                alert('File uploaded successfully');
                window.location.reload();
              }
            });
          })
        }catch(error){
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