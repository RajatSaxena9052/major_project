import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (

            <div class="container-fluid">
                <nav class="navbar navbar-light bg-info">
                    <a class="navbar-brand" href="/">
                        <img src="splitwise.png" width="108" height="32" className="d-inline-block align-top" alt="splitwise" />
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