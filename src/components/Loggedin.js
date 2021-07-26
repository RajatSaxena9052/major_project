import React from "react";
import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Dashtab from "./Dashtab";
import Recentab from "./Recenttab";
import { Route } from "react-router-dom";
import Allexpenses from "./Allexpenses";

export default class Loggedin extends React.Component {
    render() {

        return (
            <>
                <Navbar />
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-2">
                            <Sidebar />
                        </div>

                        <div class="col-9 shadow border-4 border-start border-end" style={{ height: " 100vh/* calc(100vh - 60px) */" }}>
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

                            <Route path="/loggedin/allexpenses" exact render={(props) => {
                                return (
                                    <>
                                        <Allexpenses />
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

