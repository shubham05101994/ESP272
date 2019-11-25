import React, { Component } from 'react';
import axios from 'axios';
class Doctorviewreports extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:this.props.location.data,
            response:[]
         }
    }
    async componentDidMount() { 
        axios.get('medicalhistory/',
        {
          params:{
           PatientID: this.state.data
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

    render() { 
       
        return ( 
            <div className="col-md-12">
          {this.state.response.map(response => (
            <div  className="display_p" key={response.PatientID}>
              <div className="col-md-2">
                <b>{response.Filename}</b>
              </div>
              <div>
                  <img src={response.Filedownloadlink} alt="Uploaded images" height="800" width="800"/>
                </div>
            </div>
          ))}
        </div>
         );
    }
}
 
export default Doctorviewreports;