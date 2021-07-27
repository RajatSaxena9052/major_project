import React, { Component } from 'react'

export default class Allexpenses extends Component {

    state = {
        display: ""
    }

    removeExpense = (event, msg) => {
        console.log(event, msg)
        this.setState({
            display: "none"
        })
    }
    componentDidUpdate() {
        // Typical usage (don't forget to compare props):
        console.log(" call hua kuch remove hua lagta hai");

    }

    componentWillUnmount() {
        console.log("kuch remove hua lagta hai");

    }

    render() {

        // console.log(this.props.data);

        const {
            friendName,
            description,
            equalSplit = 0,
            amountPaid = 0,
            selfPaid = 0,
        } = this.props.data;

        return selfPaid ?
            <div style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-7 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> You paid<br /> <span className="text-dark"> {amountPaid} </span></div>
                    <div class="col text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" > <span> {equalSplit} </span></font></div>
                </div>
                <button onClick={(e) => this.removeExpense(e.target.value, this.props.data)}>x</button>
            </div>
            :
            <div style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-7 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> {friendName} paid <br /><span className="text-dark"> {amountPaid} </span></div>
                    <div class="col text-secondary">{friendName} lent you <br /><font color="#ff652f" > <span> {equalSplit} </span></font></div>
                </div>
                <button onClick={(e) => this.removeExpense(e.target.value, this.props.data)}>x</button>
            </div >
    }
}
