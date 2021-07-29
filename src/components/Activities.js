import React from "react";

export default class Activities extends React.Component {
    render() {
        // const {
        //     description,
        //     equalSplit,
        //     selfPaid
        // } = this.props.data;

        const { data = [] } = this.props;

        return data.map(d => {
            const {
                description,
                equalSplit,
                selfPaid
            } = d;

            // console.log(d);

            return selfPaid ?
                <div class="container" >
                    <div class="notification-content text-start border-1">
                        <strong>You</strong> added <strong>{description}</strong>.<br /><font color="#5bc5a7">You get back {equalSplit}</font>

                    </div>
                </div >
                :
                < div class="container" >
                    <div class="notification-content text-start border-1">
                        <strong>You</strong> added <strong>{description}</strong>.<br /><font color="#ff652f">You owe {equalSplit}</font>

                    </div>
                </div >
        })

    }
}