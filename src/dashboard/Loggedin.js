import React from "react";
import Navbar from "./nav";
import Sidebar from "./sidebar";
import Dashtab from "./dashtab";
import Recentab from "./recenttab";
import { Route } from "react-router-dom";

export default class Loggedin extends React.Component {
    render() {
    
        return (
            <>
                <Navbar />
                <div class="container-fluid" style={{ minHeight: "100%" }}>
                    <div class="row" style={{ minHeight: "100%" }}>
                        <div class="col-2">
                            <Sidebar />
                        </div>

                        <div class="col-9 shadow border-4 border-start border-end" style={{ minHeight: "100%" }}>
                            <Route path="/loggedin/dashboard" exact render={(props) => {
                                return (
                                    <>
                                        <Dashtab />
                                    </>
                                )
                            }} />
                            <Route path="/loggedin/recent" exact render={(props) => {
                                return (
                                    <>
                                        <Recentab />
                                    </>
                                )
                            }} />

                        </div>
                    </div>
                </div>
            </>
        )

    }
}

