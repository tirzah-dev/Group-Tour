import React from 'react';
import './views/group-wall-layout.css';
import Header from "./Header";
import SidebarLeft from "./SidebarLeft";
import Main from './Main';
import SidebarRight from './SidebarRight';

function GroupWallLayout(props) {
    return (
        <div className="group-wall-wrapper">
            <div className="wall-header"> <Header /></div>
            <div className="left-sidebar"> <SidebarLeft /></div>
            <div className="main"><Main /></div>
            <div className="right-sidebar"><SidebarRight /></div>
        </div>
    )
}

export default GroupWallLayout;
