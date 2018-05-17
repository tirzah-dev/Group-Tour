import React from 'react';
import './views/group-wall.css';
import GroupWallLayout from "./GroupWallLayout";
import { connect } from "react-redux";

function GroupWall(props) {
        console.log(props);
        
        return (
            <div className="group-wall-page">
                <div className="group-wall-wrapper">
                    <GroupWallLayout />
                </div>
            </div>
        )
    }

export default connect(state => state.trips, {})(GroupWall);
