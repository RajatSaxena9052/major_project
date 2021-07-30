import React, { Component } from 'react';

export default class IndividualTransactions extends Component {

    componentDidMount() {
        // this.props.userList
    }

    render() {
        // console.log(this.props);
        const {
            friendName,
            description,
            equalSplit,
            amountPaid,
            selfPaid,
        } = this.props.data;

        // console.log(id);

        return selfPaid ?
            <div class="col pt-3 pb-3 border-2 border-bottom flex-nowrap" >
                <div className="row flex-nowrap">
                    <div class="col col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col col-sm-5 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> You paid<br /> <span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" > Rs <span> {equalSplit} </span></font></div>
                </div>
            </div >
            :
            <div class="col pt-3 pb-3 border-2 border-bottom flex-nowrap">
                <div className="row flex-nowrap">
                    <div class="col col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" width="35px" alt="generalIcon" /></div>
                    <div class="col col-sm-5 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> {friendName} paid <br /><span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary">{friendName} lent you <br /><font color="#ff652f" > Rs <span> {equalSplit} </span></font></div>
                </div>

            </div >
    }
}
