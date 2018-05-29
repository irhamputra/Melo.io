import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from "../actions/auth";
import { connect } from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Melo.io | Dashboard</h1>
                <NavLink exact={true} to="/">Dashboard</NavLink>
                <NavLink to="/create">Create an Invoice</NavLink>
                <NavLink to="/help">Help</NavLink>
                <button onClick={() => {
                    this.props.dispatch(startLogout())
                }}>Log Out</button>
            </div>
        )
    }
}

export default connect()(Header);