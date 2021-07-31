import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class FriendsList extends Component {
    render() {

        return (
            <NavLink style={{ textDecoration: "none" }} activeClassName="active-side-link" to={`/loggedin/friends/${this.props.name}`} >
                <div className="col mb-2 side-hover">
                    {this.props.name}
                </div>
            </NavLink>
        )
    }
}
