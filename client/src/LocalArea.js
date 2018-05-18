import React from 'react';
import './views/local-area.css';
import { Link } from 'react-router-dom';

function LocalArea(props) {
    return (
        <div className="local-area-wrapper">
            <ul className="local-areas">
                <li className="oahu"></li>
                <li className="maui"></li>
                <li className="kauai"></li>

            </ul>
            <div className="best-things"><Link to="http://www.prideofmaui.com/blog/activities/top-10-maui-attractions.html">Best Things to Do in Hawaii</Link></div>
        </div>
    )
}

export default LocalArea
