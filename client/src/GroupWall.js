import React, { Component } from 'react';
import './views/group-wall.css';
import GroupWallLayout from "./GroupWallLayout";
import { connect } from "react-redux";
import { getTrip } from "./redux/tripsRedux";

class GroupWall extends Component {
    componentDidMount() {
    }
    render() {
        console.log("props", this.props)
        console.log(this.props.match.params.id);
        return (
            <div className="group-wall-page" >
                <div className="group-wall-wrapper">
                    <GroupWallLayout />
                </div>
            </div>
        )
    }
}

export default connect(state => state.travelers, { getTrip })(GroupWall);
