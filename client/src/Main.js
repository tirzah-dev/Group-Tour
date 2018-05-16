import React from 'react';
import './views/activity-section.css';
import ActivityFeed from "./ActivityFeed";

function Main(props) {
    return (
        <div className="activity-feed-holder">
            <ActivityFeed/>
        </div>
       
    )
}

export default Main
