import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render(){
        return(
            <div>
                <h1>Melo.io | Dashboard</h1>
                <NavLink exact={true} to="/">Dashboard</NavLink>
                <NavLink to="/create">Create an Invoice</NavLink>
                <NavLink to="/help">Help</NavLink>
            </div>
        )
    }
}