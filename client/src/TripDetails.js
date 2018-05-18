import React, { Component } from 'react';
import { connect } from "react-redux";
import './views/trip-details.css';
import { Link } from 'react-router-dom';

import { addTrip } from "./redux/tripsRedux";

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
            },
        }
        this.state = this.initialState;
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
        console.log(this.state.inputs);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("am I handling the submit");
        this.props.addTrip(this.state.inputs, this.props.history);
        this.setState(this.initialState)

    }

    render(props) {
        const { name, city, country, startDate, endDate } = this.state.inputs;
        return (
            <div className="trip-details-wrapper">
                <div className="background-trip-details-page">
                    {/* <img src="http://collaborate.netlify.com/as sets/travel.gif" alt="travel site"/> */}

                    <form className="form" onSubmit={this.handleSubmit} name="registration-form" className="regForm">
                        <h1 className="reg-form-title">Tell Us About Your Trip</h1>
                        <div className="tab name-info">
                        <br />
                            <input onChange={this.handleChange} name="name" value={name} placeholder="Trip Name - ex:Spring Break" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="city" value={city} placeholder="Destination City" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="country" value={country} placeholder="Destination Country" type="text" />
                            <br />
                            <input onChange={this.handleChange} name="startDate" value={startDate} placeholder="Departure Date" type="text" />
                            <br />
                            {/* <input onChange={this.handleChange} name="endDate" value={endDate} placeholder="End Date" type="text" /> */}
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="submit" type="submit" id="nextBtn">Submit</button>
                            <br />
                            <Link to="/groupinfo" className="submit"><button className="submit">Cancel</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default connect(state => state, { addTrip })(TripDetails);

