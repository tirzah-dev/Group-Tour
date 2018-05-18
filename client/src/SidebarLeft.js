import React from 'react'
import ProfileCard from './ProfileCard';


function SidebarLeft(props) {
    const tripId = props.tripId;
    return (
        <div>
          <ProfileCard tripId={tripId} />
         
        </div>
    )
}

export default SidebarLeft;
