import React from 'react';
import {Link} from "react-router-dom";

function OneTrip (props){
    return (
        <div>
            <Link to={`/groupwall/${props._id}`}>Trip Name: {props.name}, City: {props.city}, Country: {props.country} </Link>
            {/* <p>{props.country}</p> */}
        </div>
    )
}
export default OneTrip;
