import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './views/trip-details.css';

import { editTrip } from './redux/tripsRedux.js';

const tripAxios = axios.create();
tripAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

class EditTripForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = { //should I use just 'this.state' here??
            inputs: {
                name: "",
                city: "",
                country: "",
                startDate: "",
                endDate: "",
            },
            loading: true,
            errMsg: ""
        };
        this.state = this.initialState;
    }
    componentDidMount() {
        tripAxios.get("/api/trips/" + this.props.match.params.id)
            .then(response => {
                this.setState({
                    inputs: { ...response.data },
                    loading: false
                })
            });

    }

    handleTripChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        });
        console.log(this.state.inputs);
    }
    handleSubmit = (event) => {
        event.preventDefault(event);
        console.log("submit was pressed")
        this.props.editTrip(this.state.inputs, this.props.match.params.id, this.props.history);
        // this.setState(this.initialState)

    }

    // render(props) {
    render() {
        // const { name, city, country, startDate, endDate } = this.state.inputs;
        // console.log("check for trip on traveler" + this.props)
        return (
            <div className="trip-details-wrapper">
                <div className="background-trip-details-page">
                    {/* <img src="http://collaborate.netlify.com/as sets/travel.gif" alt="travel site"/> */}

                    <form className="form" onSubmit={this.handleSubmit} name="registration-form" className="regForm">
                        <h1 className="reg-form-title">Edit Trip</h1>
                        <div className="tab name-info">Destination:
                        <br />
                            <input onChange={this.handleTripChange} name="name" value={this.state.inputs.name} type="text" />
                            <br />
                            <input onChange={this.handleTripChange} name="city" value={this.state.inputs.city} type="text" />
                            <br />
                            <input onChange={this.handleTripChange} name="country" value={this.state.inputs.country} type="text" />
                            <br />
                            <input onChange={this.handleTripChange} name="startDate" value={this.state.inputs.startDate} type="text" />
                            <br />
                            <input onChange={this.handleChange} name="endDate" value={this.state.inputs.endDate} type="text" />
                        </div>
                        <br />
                        <br />
                        <div>
                            <button className="submit" type="submit" id="nextBtn">Save Edits</button>
                            <Link to="/groupWall" className="submit">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default connect(null, { editTrip })(EditTripForm);

