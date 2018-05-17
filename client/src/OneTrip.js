import React from 'react';
import { Link } from "react-router-dom";

function OneTrip(props) {
    return (
        <li>
            <Link to={`/groupwall/${props._id}`}>
                {props.name} - {props.city}
            </Link>
            {/* <p>{props.country}</p> */}
        </li>
    )
}
export default OneTrip;
