import React from 'react';
import './views/profile-card.css';
// import { Link } from 'react-router-dom';


function ProfileCard(props) {
    return (
        <div className="profile-card-page">
            <div className="profile-page-wrapper">

                <div className="avatar-area">
                    <div className="add-avatar-img">
                        <img className="profile-image" href="https://cdn1.iconfinder.com/data/icons/ui-5/502/user-256.png"></img></div>

                    <h2 className="name-profile-card"> John Doe</h2>
                </div>
                <br />
                <h3 className="trip-name-profile-card">Hawaii, USA</h3>
                <h3 className="start-date-display-profile-card">July 7, 2018</h3>

                <br />
                <br />
                <div className="trips-list-display">
                    <h3 classname="my-trips-list-title">My Trips</h3>
                    <ul id="my-trips-list">
                        <li>trip list</li>
                    </ul>
                </div>
                <div className="button-section">
                    <button className="edit-btn" name="edit">Edit</button>
                    <button className="delete-btn" name="delete">Delete</button>
                    </div>
            </div>
        
        </div>

    )
}

export default ProfileCard;