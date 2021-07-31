import React, { Component } from 'react';

export default class IndividualTransactions extends Component {

    render() {

        const {
            friendName,
            description,
            equalSplit,
            amountPaid,
            selfPaid,
        } = this.props.data;

        return selfPaid ?
            <div class="pt-3 pb-3 border-2 border-bottom" >
                <div className="row justify-content-center align-items-center">
                    <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col-10 col-sm-7 col-lg-5 text-start">{description}</div>
                    <div class="col-6 col-sm-2 col-lg-3 align-self-start mt-2 mt-sm-0 text-secondary text-break "> You paid<br /> <span className="text-dark fw-bold"> Rs {amountPaid} </span></div>
                    <div class="col-6 col-sm-2 col-lg-3 align-self-start mt-2 mt-sm-0 text-secondary text-break "> You lent {friendName}<br /><font color="#5bc5a7" className="fw-bold" > Rs <span> {equalSplit} </span></font></div>
                </div>
            </div >
            :
            <div class="col pt-3 pb-3 border-2 border-bottom">
                <div className="row justify-content-center align-items-center">
                    <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col-10 col-sm-5 text-start">{description}</div>
                    <div class="col-6 col-sm-3 align-self-start mt-2 mt-sm-0 text-secondary text-break">{friendName} paid <br /><span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col-6 col-sm-3 align-self-start mt-2 mt-sm-0 text-secondary text-break">{friendName} lent you <br /><font color="#ff652f" > Rs <span> {equalSplit} </span></font></div>
                </div>
            </div >
    }

}
