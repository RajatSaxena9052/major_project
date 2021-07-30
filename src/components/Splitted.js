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

            <div className="container pt-3 pb-3 border-2 border-bottom">
                <div className="row text-start">
                    < Link to={`/loggedin/friends/${friendName}`} class="row">
                        <div class="col-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" width="35px" alt="generalIcon" /></div>
                        <div className="col"><strong>{friendName}</strong><br /><font color={`${selfPaid ? "#5bc5a7" : "#ff652f"} `}>{selfPaid ? `Owes you Rs ${equalSplit}` : `You owe Rs ${equalSplit}`}</font> </div>
                    </Link >
                </div>
            </div >


        )
    }
}