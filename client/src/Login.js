import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import './views/login.css';
import './assets/travel.gif';
import { login } from "./redux/travelersRedux"


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                username: "",
                password: ""
            }
        }
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
        console.log(this.state.inputs);
    }
    clearInputs = () => {
        this.setState({
            inputs: {
                username: "",
                password: "",
            }
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.inputs);
        this.clearInputs();
    }
    //const{user_name, password, isAuth, is Admin} = props from the component pulling the data
    render() {
        const authErrorCode = this.props.authErrCode.login;
        let errMsg = "";
        if (authErrorCode < 500 && authErrorCode > 399) {
            errMsg = "Invalid username or password"
        } else if (authErrorCode > 499) {
            errMsg = "Server error!"
        }
        return (
            <div className="login-page-whole">
                <div className="login-page-wrapper" >
                    <div className="background-auth-page">
                        
                        <div className="container">
                            <div className="log-in">
                            </div>
                            <form onSubmit={this.handleSubmit} id="log-in-form">
                                <div className="header">
                                    <h1>Welcome back!</h1>
                                </div>
                                <input onChange={this.handleChange} className="user-name" type="text" name="username" placeholder="User Name*" required />
                                <input onChange={this.handleChange} clasName="password-input" type="text" name="password" placeholder="Your password*" required />
                                <button type="submit" className="login-button">Log in</button>
                                <br />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => state.travelers, { login })(Login);
