import React from 'react';
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import moment from 'moment';

function OneTrip(props) {
    console.log(props._id);
    return (
        <div>
            <Link to={`/groupwall/${props._id}`}>Trip Name: {props.name}, City: {props.city}, Country: {props.country}, Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY')}</Link>
            <footer>
            <Link to={`/edit-trip/${props._id}`}  className="editLink">Edit Trip</Link>
            {/* <Link to={"/api/trips/" + id + TripDetails[0]._id}  className="editLink">Edit Trip</Link> */}
            {/* <Link  to={`/api/trips`} onClick={handleClick} className="editLink">Delete</Link> */}
            </footer>
        </div>
    )
}
export default OneTrip;
