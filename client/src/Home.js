import React from 'react';
import { Link } from 'react-router-dom';
import "./views/main.css";

function Home(props) {
    return (
        <div className="landing-page-wrapper">
<div className="main-body">
            <header>
                <nav>
                    <button className="nav-button fa fa-bars"> </button>
                    <div>
                        <ul>
                            <ul>
                                <button className="exit-menu fa fa-times"> </button>
                                <li> <Link to="/" id="home" className="active">welcome</Link></li>
                                <li> <Link to="/login" id="login"> sign in</Link> </li>
                                <li> <Link to="/signup" id="signup"> sign up</Link> </li>
                                {/* <Link to="" id=""><li> contact</li></Link>  */}
                            </ul>
                        </ul>
                    </div>
                </nav>
                <div className="center">
                    <h1 className="alex-brush"> Collaborate</h1>
                    <h2> Redefining Group Travel</h2>
                    <span id="asterisk"> * </span>
                    <p> A New Social Networking Experience</p>
                </div>
            </header>

            <section className="add-padding add-flex">
                <div className="center-text">
                    <h1 className="alex-brush"> <span className="custom-font"> Create Your Own Private Network </span><br /> </h1>
                    <h2> * </h2>
                    <p> Invite the rest of your group to your own private network to collborate together, to create a an unforgetable experience.
            </p>
                    <h4 className="link"> <Link to="/login" id="login-link"> Create a Group</Link></h4>
                </div>
                <div className="stuffed-cherries" data-aos="fade-left" data-aos-delay="300">
                </div>
            </section>

            <section className="bread-background center-h1">
                <h1 className="custom-h1 alex-brush"> <span className="custom-font"> Plan the Perfect Vacation </span><br />
                </h1>
            </section>

            <section className="menu add-flex add-padding">

                {/* <div className="menu-images">
            <img src="https://static.mltvacations.com/images/content/package/stockphotos/beach_friends03_365.jpg" data-aos="fade-down" data-aos-delay="300"/> */}
                {/* <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=03ef5d95e65d797d58b9a29c41e2f0ea&amp;fit=crop&amp;w=300&amp;q=218" data-aos="fade-left" data-aos-delay="300"/>
            <img src="https://images.unsplash.com/photo-1491243658503-56c102aab1a9?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=11784e19eb7e8c74aaa5684ca400e1ac&amp;fit=crop&amp;w=300&amp;q=218" data-aos="fade-right" data-aos-delay="300"/>
            <img src="https://images.unsplash.com/photo-1525162618450-db04e92d63d6?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=a4a186f1e7f1b482df879c6dc0333206&amp;fit=crop&amp;w=300&amp;q=218" data-aos="fade-right" data-aos-delay="300"/>
            <img src="https://images.unsplash.com/photo-1486210284477-e900ad8a6820?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=c63ccb0d48159c15f7ca6e47bd0d8a0e&amp;fit=crop&amp;w=300&amp;q=218" data-aos="fade-up" data-aos-delay="300"/>
        </div>   */}

                <div className="center-text">
                    <h1> <span className="custom-font alex-brush"> Plan the perfect </span><br />ITENAIRY </h1>
                    <h2> * </h2>
                    <p> Once you've created a group, you and your travel buddies can plan the perfect vacation. Together you can research awesome new places to explore, post pictures, and finalize your dream iternairy.</p>
                </div>

            </section>

            <section className="cake-background center-h1">
                <h1 className="custom-h1"> <span className="custom-font alex-brush"> Explore </span><br /> DISCOVER </h1>
            </section>

            <section className="add-flex reservation-section">
                <div className="center-text add-padding">
                    <h1> <span className="custom-font alex-brush">Share</span><br /></h1>
                    <h2> * </h2>
                    <p> Share ideas, places you'd like to go visit, deals, pretty much anything with collaborate. </p>

                    <h4 className="link">  <Link to="login" id="second-login-link">Join Now</Link></h4>

                </div>

            </section>

            <footer>
                <button className="to-top"> <i className="fa fa-chevron-up"> </i>TOP</button>
                <div className="private-events">
                </div>

                <div className="copyright">
                    <p> <small> Copyright 2018  Created by Lelana Villa, Danielle Walker, and Tirzah Evanglista. <span></span></small>
                    </p>

                </div>

            </footer>

        </div>
        </div>

    )
}
export default Home;