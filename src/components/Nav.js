import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {

    render() {

        return (
            <div class="jumbotron" >
                <nav class="navbar navbar-light" style={{ padding: "0 24px", backgroundColor: "#5bc5a7" }}>
                    <a class="navbar-brand" href="/">
                        <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" height="20" alt="splitwise icon"></img><span class="text-white fw-bold">Splitwise</span>
                    </a>

                    <div class="dropdown">
                        <a class="btn text-white dropdown-toggle" href="no/links" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </a>

                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link to="/" class="dropdown-item" href="#nolink">Sign Out</Link></li>
                        </ul>
                    </div>
                </nav>
            </div >
        );

    }
}