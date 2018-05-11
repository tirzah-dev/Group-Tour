import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

function App() {
    return (
        <div>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/login' component={Login} />


            </Switch>
        </div>
    )
}
export default App;