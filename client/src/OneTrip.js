import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';

const OneTrip = (props) => {
    console.log("PROPS:", props);
    
    return (
        <div>
            <Link to={`/groupwall/${props._id}`}><h2>Trip Name: {props.name}</h2> <h2>Destination: {props.city}, {props.country}</h2> {/* <h3>Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY')}</h3> */}
                    {/* Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY' */}
            </Link>
        </div>
    )
}
export default OneTrip;



