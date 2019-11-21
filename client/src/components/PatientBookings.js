import React, { Component } from "react";

class PatientBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingdetails: []
    };
  }
  render() {
    return (
      <div>
        <div>Here are your Booking Details</div>
        {this.state.bookingdetails.map(response => (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{response.Specialization}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default PatientBooking;
