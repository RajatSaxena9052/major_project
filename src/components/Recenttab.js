import React from "react";
import Activities from "./Activities";

export default class Recentab extends React.Component {

    render() {
        const data = JSON.parse(localStorage.getItem("data")) || {};
        // console.log(data)

        return (
            <div class="mx-auto" >

                < div class="row d-flex align-items-center justify-content-between dash-back p-2" >

                    <div class="col-5 text-start">
                        <h1 class="h4">Recent activity</h1>
                    </div>

                </div >
                <div>
                    <Activities data={data} />
                </div>

            </div>
        );
    }
}