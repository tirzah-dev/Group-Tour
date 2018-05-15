import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';
import GroupInfo from './GroupInfo';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />
                <Route path='/groupinfo' component={GroupInfo}/>


            </Switch>
        </div>
    )
}
export default App;