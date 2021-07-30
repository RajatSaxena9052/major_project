import React from "react";
import { Link } from "react-router-dom";

export default class Splitted extends React.Component {
    render() {

        const {
            friendName,
            equalSplit = 0,
            // selfPaid = 0,
        } = this.props.data;


        return (

            <div className="pt-3 pb-3 border-2 border-bottom">
                <div className="row">
                    < Link to={`/loggedin/friends/${friendName}`} id="link-decoration" class="row">
                        <div class="col-2 align-self-center ">
                            <img class="rounded-circle" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-grey2-100px.png" height="35px" alt="generalIcon" />
                        </div>
                        <div className="col text-start">
                            <strong>{friendName}</strong><br /><font color={`${equalSplit > 0 ? "#5bc5a7" : "#ff652f"} `}>{equalSplit > 0 ? `Owes you Rs ${equalSplit}` : `You owe Rs ${-equalSplit}`}</font>

                            {/* <strong>{friendName}</strong><br /><font color={`${selfPaid ? "#5bc5a7" : "#ff652f"} `}>{selfPaid ? `Owes you Rs ${equalSplit}` : `You owe Rs ${equalSplit}`}</font> */}
                        </div>
                    </Link >
                </div>
            </div >


        )
    }
}