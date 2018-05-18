import React from 'react';
import { Link } from "react-router-dom";
// import { connect } from 'react-redux';
import moment from 'moment';

function OneTrip(props) {
    console.log(props._id);
    return (
        <li>
            <Link to={`/groupwall/${props._id}`}> <p> Trip Name: {props.name} </p> <p> City: {props.city}</p> <p> Country: {props.country}</p></Link>
            <footer>
            <Link to={`/edit-trip/${props._id}`}  className="editLink">Edit Trip</Link>
            </footer>
        </li>
    )
}
export default OneTrip;

 {/* Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY' */}

