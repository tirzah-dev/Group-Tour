import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteTrip } from './redux/tripsRedux';
import moment from 'moment';


import './views/profile-card.css';

class ProfileCard extends Component {
    handleClick =(e) =>{
        this.props.deleteTrip(this.props.match.params.id);
    }
    
    render(props) {
        const { name, trips } = this.props.travelerData;
        const { id } = this.props.match.params;
        const trip = trips.find(trip => trip._id === id);
        return (
            <div className="profile-card-page">
                <div className="profile-page-wrapper">

                    <div className="avatar-area">
                        <div className="add-avatar-img">
                            <img className="profile-image" href="https://cdn1.iconfinder.com/data/icons/ui-5/502/user-256.png"></img>
                        </div>
                        <h2 className="name-profile-card">{name}</h2>
                    </div>
                    <br />
                    <h2>{trip.name}</h2>
                    <br />
                    <h3>{trip.city}</h3>
                    <h3>{trip.country}</h3>
                    {/* <h3>Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY')}</h3> */}
                    {/* Travel Dates: {moment.utc(props.startDate).format('MMM Do')} - {moment.utc(props.endDate).format('MMM Do YYYY' */}
                    <br />

                    <Link to={`/edit-trip/${id}`}><button className="edit-btn" name="edit">Edit Trip</button></Link>

                    <Link  to={`/groupinfo`} onClick={this.handleClick} className="editLink"><button className="delete-btn" name="delete">Delete</button></Link>

                    <br />
                    <button className="edit-btn" name="edit">Add Activity</button>
                    <br />
                    <div className="trips-list-display">
                        <Link to='/groupinfo'><button className="edit-btn my-trips-list-title" name="edit">My Trips</button></Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default withRouter(connect(state => state.travelers, { deleteTrip })(ProfileCard));
