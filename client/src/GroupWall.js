import React from 'react';
import './views/group-wall.css';
import GroupWallLayout from "./GroupWallLayout";

function GroupWall(props) {
    return (
        <div className="group-wall-page">
            <div className="group-wall-wrapper">
            <GroupWallLayout/>
        </div>
        </div>
        
    )
}

export default GroupWall;
