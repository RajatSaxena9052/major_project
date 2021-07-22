import React from "react";
import { Link } from "react-router-dom";


export default class Navbar extends React.Component {
    render() {
        return (
            <div id="header" class="container d-flex justify-content-between">
                <Link to="/" class="ml-0" href="_blank"><img class="download-app" src="splitwise.png" alt="splitwise logo" /></Link>
                <div id="log-sign-container">

                    <Link to="/login" id="login-btn" href="/login">Log in</Link>

                    <Link to="/signup" ><button id="signup-btn">Sign up</button></Link>
                </div>
            </div>
        )
    }
}