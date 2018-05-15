import React from 'react';
import './views/group-info.css';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from './redux/travelersRedux';
// import {getTrips, addTrip} from '../redux/tripsRedux.js';

function GroupInfo(props) {
  return (
    <div>
      <br />
      <div className="has-animation animation-ltr" data-delay="10">
        <p className="bigger">Your Trips</p>
      </div>

      <br />
      <p>this is where a list of trips is created dynamically from data in database</p>
      <br />

      <div className="has-animation animation-rtl" data-delay="1000">
        <p className="text">Just click on a trip below to see details.</p>
        <ul className="text">
          {/* <li>{array  travelers_current groups in a list style}</li> */}
        </ul>
      </div>
      <br />
      <br />
      <div className="has-animation animation-ltr" data-delay="1500">
        <p className="text txt-center">If this is your first time here, click below to create a trip, and invite members to your trips page to collaborate together on planning the perfect group adventure.
        <Link to='/tripdetails' id='trip_details'> Create New Trip</Link>
        <br />
        </p>
        <nav>
          <Link to="/">
            <button onClick={props.logout}>Logout</button>
          </Link>
          {/* <Link></Link> */}
        </nav>
      </div>
      <br />
      <br />
      <div className="has-animation animation-rtl" data-delay="2000">
        <img src="https://handluggageonly.co.uk/wp-content/uploads/2015/01/478470_10151604293251789_334674524_o.jpg" width="600" />
      </div>

      <br />

      <div className="has-animation animation-ltr" data-delay="4000">
        <p className="bigger">Get Started ☺</p>
      </div>


    </div>
  )
}
export default connect(state=> state.auth, { logout })(GroupInfo);


