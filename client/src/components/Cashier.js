import React, { Component } from 'react'

export default class Cashier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientID: ""

        };
      }
    render() {
        return (
            <div className="container">
            <h2>Manage Patient Payments</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-row">
                <div className="form-group col-md-5">
                <input 
                    className="form-control" 
                    type="text"
                    id="patientID"
                    placeholder="Enter Patient ID"
                    value={this.state.patientID}
                    onChange={this.onInputChange}
                />
                </div>
            </div>
            <div class="form-row">
            <div className="form-group col-md-5">
                <button type="submit" className="btn btn-primary">Check Payment</button>
            </div>
            </div>
            </form>
            </div>
            
        )
    }
}
