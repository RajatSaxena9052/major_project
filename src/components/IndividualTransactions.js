import React, { Component } from 'react'

export default class IndividualTransactions extends Component {

    componentDidMount() {
        // this.props.userList
    }

    render() {
        console.log(this.props)
        const {
            friendName,
            description,
            equalSplit,
            amountPaid,
            selfPaid,
        } = this.props.data;

        // console.log(id);

        return selfPaid ?
            <div class="p-2" >
                <div className="row">
                    <div class="col-6 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> You paid<br /> <span className="text-dark"> Rs {amountPaid} </span></div>

                    <div class="col text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" > Rs <span> {equalSplit} </span></font></div>
                </div>
            </div >
            :
            <div class="p-2">
                <div className="row">
                    <div class="col-6 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> {friendName} paid <br /><span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary">{friendName} lent you <br /><font color="#ff652f" > <span> Rs {equalSplit} </span></font></div>
                </div>

            </div >
    }
}
