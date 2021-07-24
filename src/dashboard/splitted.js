import React from "react";

export default class Splitted extends React.Component {
    render() {
        console.log(this.props)
        const {
            friendName,
            equalSplit,
            selfPaid
        } = this.props.data;

        return (


            selfPaid ?
                <div class="container border-2" >
                    <div class="notification-content text-start border-1">
                        <strong>{friendName}</strong><br /><font color="#5bc5a7">Owes you Rs {equalSplit}</font>

                    </div>
                </div >
                :
                <div class="container" >
                    <div class="notification-content text-start border-1">
                        <strong>{friendName}</strong> <br /><font color="#ff652f">You owe Rs {equalSplit}</font>
                    </div>
                </div >

        )
    }
}