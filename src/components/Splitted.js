import React from "react";
import { Link } from "react-router-dom";

export default class Splitted extends React.Component {
    render() {
        // console.log(this.props)
        const {
            friendName,
            equalSplit,
            selfPaid
        } = this.props.data;

        return (

    // selfPaid ?
    < Link to = {`/loggedin/dashboard/${friendName}`}>
        <div className="container" >
            <div className="notification-content text-start">
                <strong>{friendName}</strong><br /><font color={`${selfPaid ? "#5bc5a7" : "#ff652f"} `}>{selfPaid ? `Owes you Rs ${equalSplit}` : `You owe Rs ${equalSplit}`}</font>
            </div>
        </div >
            </Link >
            // :
            // <div className="container" >
            //     <div className="notification-content text-start border-1">
            //         <strong>{friendName}</strong> <br /><font color="">You owe Rs {equalSplit}</font>
            //     </div>
            // </div >
        )
    }
}