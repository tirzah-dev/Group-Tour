import React from 'react';
import { Link } from 'react-router-dom';
import './views/trip-details.css';



function TripDetails(props){
            return (
          <div className="trip-details-wrapper">
                <div className="background-trip-details-page">
                    {/* <img src="http://collaborate.netlify.com/as sets/travel.gif" alt="travel site"/> */}

<form class="form" name="registeration-form" id="regForm">

    <h1 id="reg-form-title">Tell Us About Your Trip</h1>
    
    <div class="tab name-info">Destination:
        <br/>
        <p><input placeholder="Name" type="text"/></p>
        <br/>
        <p><input placeholder="City" type="text"/></p>
        <br/>
        <p><input placeholder="Country" type="text"/></p>
        <br/>
        <p><input placeholder="Start Date" type="text"/></p>
        <br/>
        <p><input placeholder="End Date" type="text"/></p>
    </div>
    <br/>
    <br/>
    <div>
        
            <Link to="/groupwalllayout" id="group-wall-layout"> <button class="submit"  type="button" id="nextBtn">Submit</button></Link>
        </div>
   


</form>
</div>
</div> 
            )
        }
export default TripDetails;
