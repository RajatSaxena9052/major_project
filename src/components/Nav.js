import React from "react";
import splitwiseLogo from "../logos/splitwise.png"
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (

            <div class="jumbotron" >
                <nav class="navbar navbar-light bg-info" style={{ padding: "0 24px" }}>
                    <a class="navbar-brand" href="/">
                        <img src={splitwiseLogo} width="108" height="32" className="d-inline-block align-top" alt="splitwise" />
                    </a>

                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="no/links" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link to="/" class="dropdown-item" href="#nolink">Sign Out</Link></li>
                            {/* <li><a class="dropdown-item" href="#nolink">Another action</a></li> */}
                            {/* <li><a class="dropdown-item" href="#nolink">Something else here</a></li> */}
                        </ul>
                    </div>

                </nav>

            </div >

        );
    }
}