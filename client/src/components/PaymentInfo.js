import React, { Fragment , Component}  from 'react';
import Cashier from './Cashier';

export default class PaymentInfo extends Component {
    render() {
        return (
            <Fragment>
                <Cashier ></Cashier>
                <form onSubmit={this.handleSubmit}>
            <div class="form-row">
                <div className="form-group col-md-3">
                <label>Patient Name: </label>
                </div>
                <div className="form-group col-md-5">
                <text></text>
                </div>
            </div>
            </form>
            </Fragment>
            
        )
    }
}
