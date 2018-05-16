import React, { Component } from 'react';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import './views/trip-details.css';

import GroupWall from './GroupWall';
import {addTrip} from "./redux/tripsRedux";

class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                name: "",
                city: "",
                country: "",
                startDate: "",
                endDate: "",
                // travelers: this.props.travelers.travelerData._id
            },
        }
        this.state = this.initialState;
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState(prevState =>{
            return {
                inputs:{
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
        console.log(this.state.inputs);
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("am I handling the submit")
        this.props.addTrip(this.state.inputs, this.props.history);
        this.setState(this.initialState)

    }

    render(props) {
        const {name, city, country, startDate, endDate} = this.state.inputs;
        console.log("check for trip on traveler" + this.props)
        return (
            <div className="trip-details-wrapper">
                <div className="background-trip-details-page">
                    {/* <img src="http://collaborate.netlify.com/as sets/travel.gif" alt="travel site"/> */}

                    <form className="form" name="registeration-form" id="regForm">
                        <h1 id="reg-form-title">Tell Us About Your Trip</h1>
                        <div className="tab name-info">Destination:
                        <br />
                            <input onChange={this.handleChange} name="name" value={name} placeholder="Name" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="city" value={city} placeholder="City" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="country" value={country} placeholder="Country" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="startDate" value={startDate} placeholder="Start Date" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="endDate" value={endDate} placeholder="End Date" type="text" />
                        </div>
                        <br />
                        <br />
                        <div>
                        <button onClick={this.handleSubmit} className="submit" type="button" id="nextBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(state => state, {addTrip})(TripDetails);

