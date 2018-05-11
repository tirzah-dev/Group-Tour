import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from './SignUp';

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUp} />


            </Switch>
        </div>
    )
}
export default App;