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
                <div class="pt-3 pb-3 border-2 border-bottom" >
                    <div class="notification-content text-start border-1 row">
                        <Link to="/loggedin/allexpenses" id="link-decoration" class="row flex-nowrap">
                            <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" width="35px" alt="generalIcon" /></div>
                            <div><strong>You</strong> added <strong>"{description}"</strong>.<br /><font color="#5bc5a7">You get back Rs {equalSplit}</font></div>
                        </Link>
                    </div>
                </div >
                :
                < div class="pt-3 pb-3 border-2 border-bottom" >
                    <div class="notification-content text-start border-1 row">
                        <Link to="/loggedin/allexpenses" id="link-decoration" class="row flex-nowrap">
                            <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" width="35px" alt="generalIcon" /></div>
                            <div><strong>You</strong> added <strong>"{description}"</strong>.<br /><font color="#ff652f">You owe Rs {equalSplit}</font></div>
                        </Link>
                    </div>
                </div >
        })

    }
}