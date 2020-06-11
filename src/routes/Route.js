import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { isSigned } from "../helpers/authHandler";
import Auth from '../pages/Layouts/Auth/';
import Default from '../pages/Layouts/Default/';

export default function RouteWraper({
    component: Component,
    isPrivate = false,
    isAuth = false,
    ...rest
}) {
    const signed = isSigned();//store.getState().auth;

    if(!signed && isPrivate) {
        return <Redirect to='/login'/>
    }

    if(signed && isAuth) {
        return <Redirect to='/'/>
    }

    const Layout = Default//signed ? Default : Auth;

    return (
        <Route 
            {...rest}
            render = {props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}