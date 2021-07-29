import React from "react";
import { Link } from "react-router-dom";

export default class Activities extends React.Component {
    render() {

        const { data = [] } = this.props;

        return data.map(d => {
            const {
                description,
                equalSplit,
                selfPaid
            } = d;

            return selfPaid ?
                <div class="container p-2" >
                    <div class="notification-content text-start border-1">
                        <Link to="/loggedin/allexpenses">  <strong>You</strong> added <strong>{description}</strong>.<br /><font color="#5bc5a7">You get back {equalSplit}</font></Link>
                    </div>
                </div >
                :
                < div class="container p-2" >
                    <div class="notification-content text-start border-1">
                        <Link to="/loggedin/allexpenses"><strong>You</strong> added <strong>{description}</strong>.<br /><font color="#ff652f">You owe {equalSplit}</font></Link>

                    </div>
                </div >
        })

    }
}