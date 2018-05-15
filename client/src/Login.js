import React from 'react';
import { Link } from "react-router-dom";
import './views/login.css';
import './assets/travel.gif';
// import '../views/login.js';

function Login(props) {
    //const{user_name, password, isAuth, is Admin} = props from the component pulling the data

    return (
       
            
            <div className="login-page-wrapper">
                <div className="background-auth-page">


                       <img src="http://collaborate.netlify.com/assets/travel.gif" alt="travel site" />
                       
                    <div className="container">
                        <div className="log-in" >
                    
                        </div>
                       
                        <form id="log-in-form">
                            <div className="header">
                                <h1>Welcome back!</h1>
                            </div>
                            
                            <input className="user-name" type="text" name="user-name" placeholder="User Name*" required />
                            <input type="text" name="password" placeholder="Your password*" required />
                            <Link to="/groupinfo"><button type="submit" className="login-button">Log in</button></Link>
                            <br />

                        </form>

                    </div>
                </div>
                
          


        </div>
        
    )
}

export default Login;
