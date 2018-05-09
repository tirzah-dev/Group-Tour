import React from 'react';
import { Link } from "react-router-dom";
import '../views/auth-page.css';
import '../views/auth-page.js';
//handleChange and handleSubmit will need to be imported and added into the approciate places within the tag elements.

function Login(props) {
    //const{user_name, password, isAuth, is Admin} = props from the component pulling the data

    return (
        <div className="login-page-wrapper">
            <body>
                <div className="background-auth-page">

                    <img src="../views/assets/travel.gif" alt="travel site" />
                    <div className="container">
                        <div className="log-in" id="log-in-button">
                            <p className="log-in-header">Log In</p>
                        </div>
                       
                        <form id="log-in-form">
                            <div className="header">
                                <h1>Welcome back!</h1>
                            </div>
                            
                            <input className="user-name" type="text" name="user-name" placeholder="User Name*" required />
                            <input type="text" name="password" placeholder="Your password*" required />
                            <Link to="./my-groups" id="login-button-to-my-groups"><button type="submit" className="login-button">Log in</button></Link>
                            <br />

                        </form>

                    </div>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            </body>


        </div>
    )
}

export default Login;
