import React, { Component } from "react";
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <footer className="page-footer font-small blue" style={{backgroundColor:'brown',color:'white',width:'100%',position:'absolute'}}>

        <div className="text-center" style={{paddingTop:'0.5%',paddingBottom:'0.5%'}}>© 2019 Copyright:
          <a href="https://medicoconnect.xyz" style={{color:'white',textDecoration:'underline'}}> medicoconnect.xyz</a>
        </div>
       
      
      </footer> );
    }
}
 
export default Footer;