import React, { Component } from 'react';
import './views/profile-card.css';
import { connect } from "react-redux";
import OneTrip from "./OneTrip";
import {getTraveler} from "./redux/travelersRedux";


class ProfileCard extends Component {
    componentDidMount(){
        console.log(this.props.travelerData._id);
        this.props.getTraveler(this.props.travelerData._id);
    }
    render(props) {
        const { name, trips } = this.props.travelerData;
        const tripList = trips.map(trip => <OneTrip key={trip._id} {...trip} />)
        return (
            <div className="profile-card-page">
                <div className="profile-page-wrapper">

                    <div className="avatar-area">
                        <div className="add-avatar-img">
                            <img className="profile-image" href="https://cdn1.iconfinder.com/data/icons/ui-5/502/user-256.png"></img></div>

                        <h2 className="name-profile-card">Name</h2>
                    </div>
                    <br />
                    <h3 className="trip-name-profile-card">Place</h3>
                    <h3 className="start-date-display-profile-card">Date</h3>

                    <br />
                    <br />
                    <div className="trips-list-display">
                        <h3 classname="my-trips-list-title">My Trips</h3>
                        <ul id="my-trips-list">
                            {tripList}
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(state => state.travelers, {getTraveler})(ProfileCard);