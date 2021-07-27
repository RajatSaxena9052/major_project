import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./Nav";
import Sidebar from "./Sidebar";
import Dashtab from "./Dashtab";
import Recentab from "./Recenttab";
import Allexpensetab from "./Allexpensetab";
import Modal from "./Modal";

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
                                        <Allexpensetab />
                                    </>
                                )
                            }} />

                            <Route path="/loggedin/addexpenses" exact render={(props) => {
                                return (
                                    <>
                                        <Modal />
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

