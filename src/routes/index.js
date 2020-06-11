import React from 'react';
import { Switch} from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import AdPage from '../pages/AdPage';
import NewAd from '../pages/NewAd';
import Ads from '../pages/Ads';

export default function() {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/login" component={Login} isAuth/>
            <Route  path="/register" component={Register} isAuth/>
            <Route  path="/ad/:id" component={AdPage} />
            <Route  path="/newadd" component={NewAd} />
            <Route  path="/ads" component={Ads} />
            <Route component={NotFound} />
        </Switch>
    )
}