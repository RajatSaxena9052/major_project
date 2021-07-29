import React from "react";
import { Link } from "react-router-dom";

export default class Splitted extends React.Component {
    render() {
        // console.log(this.props)
        const {
            friendName,
            equalSplit = 0,
            selfPaid = 0,
        } = this.props.data;

        return (

            <div className="container p-2" >
                <div className="notification-content text-start">
                    < Link to={`/loggedin/friends/${friendName}`}> <strong>{friendName}</strong><br /><font color={`${selfPaid ? "#5bc5a7" : "#ff652f"} `}>{selfPaid ? `Owes you Rs ${equalSplit}` : `You owe Rs ${equalSplit}`}</font>  </Link >
                </div>
            </div >


        )
    }
}