import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTrip } from './redux/tripsRedux';


import './views/profile-card.css';
import OneTrip from './OneTrip';

const ProfileCard = (props) => {
    // const { loading, data, errMsg, match } = props;
    console.log("PROPS:", props);
    // const trip = props.tripData.filter(trip => {
    //     return match.params.id === trip._id
    // })
    // const handleClick =(e) =>{
    //     props.deleteTrip(trip._id);
    // }
    return (
        <div className="profile-card-page">
            <div className="profile-page-wrapper">

                <div className="avatar-area">
                    <div className="add-avatar-img">
                        <img className="profile-image" href="https://cdn1.iconfinder.com/data/icons/ui-5/502/user-256.png" alt=""></img></div>

                    <h2 className="name-profile-card"> John Doe</h2>
                </div>
                <br />
                <OneTrip />
                {/* <h2 className="trip-name-profile-card">Trip Name: {props.trip.name}</h2>
                <h3 className="trip-name-profile-card">Hawaii, USA</h3>
                <h3 className="start-date-display-profile-card">July 7, 2018</h3> */}

                <br />
                <br />
                <div className="trips-list-display">
                <Link to='/groupinfo'><button className="edit-btn my-trips-list-title" name="edit">My Trips</button></Link>
                </div>
                <div className="button-section">
                    <Link to={`/edit-trip/${props._id}`}></Link>
                    {/* <Link  to={`/api/trips`} onClick={handleClick} className="editLink">Delete</Link> */}
                    
                    {/* delete */}
                    {/* <Link  to={`/api/trips`} onClick={handleClick} className="editLink"><button className="delete-btn" name="delete">Delete</button></Link> */}
                </div>
            </div>
        
        </div>

    )
}

export default ProfileCard;
// export default connect(state => state, { deleteTrip })(ProfileCard);