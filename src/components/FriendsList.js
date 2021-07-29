import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class FriendsList extends Component {
    render() {
        return (
            <Link to={`/loggedin/friends/${this.props.name}`} >
                <div>
                    {this.props.name}
                </div>
            </Link>
        )
    }
}
