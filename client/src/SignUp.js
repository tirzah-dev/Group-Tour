import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./views/signup.css";

import {signup} from "react-redux";
import GroupInfo from './GroupInfo';


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                traveler_name: "",
                username: "",
                email: "",
                password: "",
                

            }
        }
        this.state = this.initialState.bind("this");
        this.handleSubmit= this.handleSubmit.bind('this');
        this.handleChange = this.handleChange.bind('this');

     
    
  const handleChange = (e) => {
     this.setState ({
         inputs: e.target.value
     })
     const handleSubmit = (e) => {
         e.preventDefault();
         this.props.signup(this.state.inputs);

     }
    }
    }
        render(props) {
            const { signup, handleChange, handleSubmit}= this.props;  
            <div>
                <GroupInfo/>

            </div>
            return (
                 
                <div>
                    <body>
                        <div class="background-signup-page">

                            <img src="./assets/travel.gif" alt="travel site" />
                            <div class="signup-container">
                        <input  onChange={this.handleChange} type="text" name="signup-password" placeholder="Set a password*" required="" />

                                <form onSubmit={this.handleSubmit} id="sign-up-form">
                                    <div class="signup-header">
                                        <h1 className="signup-h1">Sign Up for Free</h1>
                                    </div>
                                    <input onChange={this.handleChange} value={this.state.inputs.traveler_name}class="traveler-name" type="text" name="traveler-name" placeholder="Name*" required="" />
                                    <input  onChange={this.handleChange} value={this.state.inputs.username}class="username-selection-input" name="traveler-username" type="text" placeholder="Choose a User Name*" required="" />
                                    <input onChange={this.handleChange} value={this.state.inputs.email}type="text" name="email" placeholder="Email Address*" required="" />
                                    <input onChange={this.handleChange} value={this.state.inputs.password}type="text" name="signup-password" placeholder="Set a password*" required="" />

                                    <Link to="/signup" id="signup-btn">  <button type="submit" class="sign-up-button">Get Started</button></Link>
                                </form>
                            </div>
                        </div>
                    </body>
                </div>

            )
        }
    }


    

   
