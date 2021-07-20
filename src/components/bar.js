import React from "react";
import { Link} from "react-router-dom";


export default class Bar extends React.Component {
    render() {
        return (
            <div id="header">
                <a href="http://www.w3.org/2000/svg">LOGO</a>
                <div id="log-sign-container">
        
                        <Link to="/login" id="login-btn" href="/login">Log in</Link>

                    <Link to="/signup" ><button id="signup-btn">Sign up</button></Link>
                </div>
            </div>
        )
    }
}