import React from "react";

import { NavLink } from "react-router-dom";
import { FaFlag } from "react-icons/fa";
import { VscListUnordered } from "react-icons/vsc";
import { BsPlusSquare } from "react-icons/bs";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div class="col"  >
                <div class="col text-start">

                    <div class="col mb-2"  >
                        <NavLink exact style={{ textDecoration: "none" }} activeClassName="active-side-link" to="/loggedin/dashboard"><div class="col side-hover" > <img src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" width="20" height="20" alt="splitwise icon"></img> Dashboard</div></NavLink>
                    </div>

                    <div class="col mb-2"  >

                        <NavLink exact style={{ textDecoration: "none" }} activeClassName="active-side-link" to="/loggedin/recent"><div class="col side-hover"> <FaFlag /> Recent activity</div></NavLink>
                    </div>

                    <div class="col mb-2"  >
                        <NavLink exact style={{ textDecoration: "none" }} activeClassName="active-side-link" to="/loggedin/allexpenses"><div class="col side-hover"><VscListUnordered /> All expenses</div></NavLink>
                    </div>

                    <div class="col mb-2"  >
                        <NavLink exact style={{ textDecoration: "none" }} activeClassName="active-side-link" to="/loggedin/addexpenses"><div class="col side-hover"><BsPlusSquare /> Add expenses</div></NavLink>
                    </div>

                </div>

            </div >
        );
    }
}