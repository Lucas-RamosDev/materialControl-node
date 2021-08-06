import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Stock from './pages/Stock';
import Buy from './pages/Buy';
import Request from './pages/Request';
import Consumption from './pages/Consumption';
import Report from './pages/Report';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>

                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/stock" component={Stock} />
                <Route path="/buy" component={Buy} />
                <Route path="/request" component={Request} />
                <Route path="/consumption" component={Consumption} />
                <Route path="/report" component={Report} />

            </Switch>
        </BrowserRouter>
    )
}