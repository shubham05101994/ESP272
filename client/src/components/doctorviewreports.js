import React, { Component } from 'react'
class Doctorviewreports extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:this.props.location.data
         }
    }
    render() { 
       
        return ( <div>
            <div>{this.state.data}</div>
            
        </div>
         );
    }
}
 
export default Doctorviewreports;