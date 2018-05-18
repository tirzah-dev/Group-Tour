import React, { Component } from 'react';
import './views/group-info.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from './redux/travelersRedux';
import OneTrip from "./OneTrip";
// import {getTrips, addTrip} from '../redux/tripsRedux.js';

class GroupInfo extends Component {

  componentDidMount() {
    // console.log(this.props.travelerData._id)
    // this.props.getTraveler(this.props.travelerData._id)
  }

  render(props) {
    const trips = this.props.travelerData.trips;
    const tripList = trips.map(trip => <OneTrip key={trip} {...trip} />)
    return (
      <div classname="group-info-body-page">
        <div className="group-info-wrapper">
        <div className="has-animation animation-ltr" data-delay="10">
          <p className="bigger">Your Trips</p>
        </div>
        <br />
        <br />
        <div className="has-animation animation-rtl" data-delay="1000">
          <p className="text">Just click on a trip to see details.</p>
          <ul className="text">
            {tripList}
          </ul>
        </div>
        <br />
        <br />
        <div className="has-animation animation-ltr" data-delay="1500">
          <p className="text txt-center">Click below to create a trip and invite people to your trips page to collaborate on the perfect group adventure.
       <br />
            <Link to='/tripdetails' id='trip_details'> <button className="create-button">Create New Trip</button></Link>
            <br />
          </p>
          <nav>
            <Link to="/">
              <button onClick={this.props.logout}>Logout</button>
            </Link>
            {/* <Link></Link> */}
          </nav>
        </div>
        <br />
        <br />
        <div className="has-animation animation-rtl" data-delay="2000">
          {/* <img src="https://handluggageonly.co.uk/wp-content/uploads/2015/01/478470_10151604293251789_334674524_o.jpg" width="600" /> */}
        </div>
        <br />
        <div className="has-animation animation-ltr" data-delay="4000">
          
        </div>
      </div>
      </div>
    )
  }
}
export default connect(state => state.travelers, { logout })(GroupInfo);


