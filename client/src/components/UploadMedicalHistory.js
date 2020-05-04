
import React, { Component } from 'react';
import axios from 'axios';
import S3 from 'react-s3';
import AWSConfigObj from './Configuration/awsConfig.json';


const configuration = {
  bucketName:  AWSConfigObj.config.bucketName,
  region: AWSConfigObj.config.region,
  accessKeyId: AWSConfigObj.config.accessKeyId,
  secretAccessKey: AWSConfigObj.config.secretAccessKey
}
class UploadMedicalHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedFile: null,
          PatientID: "",
          Filename: "",
          Filedownloadlink: "",
          response:[]
        }
      }

      async componentDidMount() { 
        axios.get('medicalhistory/',
        {
          params:{
           PatientID: localStorage.ID
          }
        }).then(response => {
          console.log(response);
        
          if (response) {
            
            this.setState({
                response: response.data
              
            });
          }
        });
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
          S3.uploadFile(this.state.selectedFile, configuration)
          .then((data)=>{
            console.log(data);
            this.setState({
              PatientID: localStorage.ID,
              Filename: data.key,
              Filedownloadlink: data.location
            })
           
            axios.post('https://8biu0dszh6.execute-api.us-east-2.amazonaws.com/prod/uploadfileinfo',this.state)
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

    onClickHandlerDelete = async event =>  {
      event.preventDefault();
      try{
        console.log(event.target.id);
        let filename = event.target.id;
        axios.get('/medicalhistory/deletefilemedico',
        {
          params:{
           PatientID: localStorage.ID,
           Filename:filename
          }
        }).then(response => {
          alert('File deleted successfully');
          window.location.reload();
        });
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
        
        <div className="col-md-12">
          {this.state.response.map(response => (
            <div  className="display_p" key={response.PatientID}>
              <div className="col-md-2">
                <b>{response.Filename}</b>
              </div>
             
              <div className="col-md-2">
                <a id={response.Filename}
                  className="btn btn-danger color_text"
                  onClick={this.onClickHandlerDelete}>
                  Delete
                </a>
              </div>
              <div>
                  <img src={response.Filedownloadlink} alt="Uploaded images" height="800" width="800"/>
                </div>
            </div>
          ))}
        </div>
        
      </div>
        
        )
    }
}

export default UploadMedicalHistory;