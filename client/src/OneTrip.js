import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import moment from 'moment';
import {deleteTrip} from './redux/tripsRedux';

const OneTrip = (props) => {
    console.log("PROPS:", props);
    // const trip = props.tripData.filter(trip => {
    //     return props.match.params.id === trip._id
    // })
    const handleClick =(e) =>{
        props.deleteTrip(props._id);
    }
    return (
        <div>
            <Link to={`/groupwall/${props.tripId}`}><h2>Trip Name: {props.name}</h2> <h2>Destination: {props.city}, {props.country}</h2> <h3>Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY')}</h3></Link>

            <div className="button-section">
                    <Link to={`/edit-trip/${props._id}`}><button className="edit-btn" name="edit">Edit Trip</button></Link>
                    <br />
                    <br />
                    
                    {/* delete without button */}
                    {/* <Link  to={`/api/trips`} onClick={handleClick} className="editLink">Delete</Link> */}
                    
                    {/* delete with button*/}
                    <Link  to={`/groupinfo`} onClick={handleClick} className="editLink"><button className="delete-btn" name="delete">Delete</button></Link>
                </div>
            {/* <Link to={`/edit-trip/${props._id}`}  className="editLink">Edit Trip</Link> */}
            {/* <Link  to={`/api/trips`} onClick={handleClick} className="editLink">Delete</Link> */}
        </div>
    )
}
export default connect(null, { deleteTrip })(OneTrip);
