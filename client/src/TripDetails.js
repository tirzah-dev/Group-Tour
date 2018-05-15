// import React, { Component } from 'react';
// import GroupWall from './GroupWall';

// export default className TripDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.initialState = {
//             inputs: {
//                 destination: {
//                     name: ""
//                 },
//                 location_details: {
//                     country: "",
//                     city: "",
//                     state: ""
//                 },
//                 startDate: {
//                     date: ""
//                 },
//                 endDate: {
//                     date: ""
//                 },
//                 travelers: {
//                     members_names: [],

//                 },
//                 activities: {
//                     names: [],


//                 }
//             }
//         }
//         this.state = this.initialState;
//         this.handleSubmit = this.handleSubmit.bind('this');
//         this.handleChange = this.handleChange.bind('this');
    

//     const handleChange = (e) => {
//         this.setState ({
//             inputs: e.target.value
//         })
//         const handleSubmit = (e) =>{
//             e.preventDefault();
//     // unsure what to call here
//     this.props(this.state.inputs);
//         }
//     }
// }
//         render() {
//             <div>
//                 <GroupWall />
//             </div>
//             return (
//                 <div>
//                 <body className="background-trip-details-page" src="./assets/travel2.gif">

// <form className="trip-form" name="trip-details-form" id="detailsForm" action="">

//     <h1 id="trip-details-form-title">Create A Group</h1>
//    <br/>


//     <div className="tab name-info" style="display: block;">Destination:
//        <br/>
//         <p><input placeholder="Name" oninput="this.className = ''"/></p>
//        <br/>
//         <p><input placeholder="City" oninput="this.className = ''"/></p>
//     </div>

//     <div className="tab contact-info">Contact Info:
//        <br/>
//         <p><input placeholder="E-mail" oninput="this.className = ''"/></p>
//        <br/>
//         <p><input placeholder="Phone" oninput="this.className = ''"/></p>
//     </div>

//     <div className="tab login-info">Login Info:
//        <br/>
//         <p><input placeholder="Username" oninput="this.className = ''"/></p>
//        <br/>
//         <p><input placeholder="Password" oninput="this.className = ''"/></p>
//         <p className="hint">PASSWORD MUST BE AT LEAST 6 CHARACTERS LONG</p>

//     </div>
//     <div className="tab location">Vacation Information:
//        <br/>
//         <p><input placeholder="Location" oninput="this.className = ''"></p>
//        <br/>
//         <p><input placeholder="Country" oninput="this.className = ''"/></p>
//        <br/>
//         <p><input placeholder="State" oninput="this.className = ''"/></p>
//        <br/>
//         <p><input placeholder="City" oninput="this.className = ''"/></p>
//     </div>
//     <div className="tab date">Vacation Date:
//        <br/>
//         <input placeholder="dd" oninput="this.className = ''">
//         <br/>
//         <input placeholder="mm" oninput="this.className = ''"/>
//        <br/>
//         <input placeholder="yyyy" oninput="this.className=''"/>
//     </div>
//     <div className="tab" id="confirmation">
//         <h3>Thank you for registering.</h3>

//        <br/>
//        <br/>

//     </div>
//    <br/>
//    <br/>

//     <div style="overflow:auto;">
//         <div style="float:right;">
//             <button type="button" id="prevBtn" onclick="nextPrev(-1)" style="display: none;">Previous</button>
//             <button className="submit" data-target="./account-dash.html" type="button" id="nextBtn" onclick="nextPrev(1)">Next</button>
//         </div>
//     </div>

//     <div style="text-align:center;margin-top:40px;">
//         <span className="step active" id="teal"></span>
//         <span className="step" id="orange-red"></span>
//         <span className="step" id="dark-yellow"></span>
//         <span className="step" id="dark-blue"></span>
//         <span className="step" id="dark-green"></span>
//         <span className="step" id="dark-magenta"></span>
//     </div>
// </form>
// </body>

//                 </div>
//             )
//         }
//     }
