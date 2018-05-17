import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./views/signup.css";
import { signup } from "./redux/travelersRedux";
import { connect } from "react-redux"

// import GroupInfo from './GroupInfo';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            inputs: {
                name: "",
                email: "",
                username: "",
                password: ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
        console.log(this.state.inputs)
    }

    clearInputs() {
        this.setState({
            inputs: {
                name: "",
                email: "",
                username: "",
                password: ""
            }
        })
    }

    handleSubmit(e) {
        console.log("did I make it here");
        e.preventDefault();
        this.props.signup(this.state.inputs);
        this.clearInputs();
    }

    render(props) {
        const authErrorCode = this.props.authErrCode.signup;
        const { name, username, password, email } = this.state.inputs;
        let errMsg = "";
        if (authErrorCode < 500 && authErrorCode > 399) {
            errMsg = "Invalid username or password"
        } else if (authErrorCode > 499) {
            errMsg = "Server error!"
        }
        return (
            <div>
                <div className="background-signup-page">
                    <img src="http://collaborate.netlify.com/assets/travel.gif" alt="travel site" />
                    <div className="signup-container">
                        <form id="sign-up-form">
                            <div className="signup-header">
                                <h1 className="signup-h1">Sign Up for Free</h1>
                            </div>
                            <input onChange={this.handleChange} className="traveler-name" type="text" name="name" value={name} placeholder="Name*" required="" />
                            <input onChange={this.handleChange} className="username-selection-input" name="username" value={username} type="text" placeholder="User Name*" required="" />
                            <input onChange={this.handleChange} type="text" name="email" value={email} placeholder="Email Address*" required="" />
                            <input onChange={this.handleChange} type="text" name="password" value={password} placeholder="Set a password*" required="" />
                          <button type="submit" onClick={this.handleSubmit} className="sign-up-button">Login</button>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

export default connect(state => state.travelers, { signup })(SignUp)

