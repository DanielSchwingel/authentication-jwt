import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';

import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Customers from './pages/Customers';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <PrivateRoute path="/customers" component={Customers} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;