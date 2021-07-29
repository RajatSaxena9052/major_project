import React, { Component } from 'react';
import { connect } from "react-redux";

import { delete_user_transaction } from "../redux";

class Allexpenses extends Component {

    state = {
        display: ""
    }

    removeExpense = (event) => {
        const { id } = this.props.data;
        const { deleteUser, userList } = this.props

        deleteUser({ id, userList })

        this.setState({
            display: "none"
        })
    }

    // componentDidUpdate() {
    //     // Typical usage (don't forget to compare props):
    //     console.log(" call hua kuch remove hua lagta hai");

    // }

    // componentWillUnmount() {
    //     console.log("kuch remove hua lagta hai");
    // }

    render() {

        const {
            friendName,
            description,
            equalSplit,
            amountPaid,
            selfPaid,
        } = this.props.data;

        // console.log(id);

        return selfPaid ?
            <div style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-7 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> You paid<br /> <span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" > Rs <span> {equalSplit} </span></font></div>
                </div>
                <button onClick={this.removeExpense} > x</button>
            </div>
            :
            <div style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-7 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> {friendName} paid <br /><span className="text-dark"> {amountPaid} </span></div>
                    <div class="col text-secondary">{friendName} lent you <br /><font color="#ff652f" > <span> {equalSplit} </span></font></div>
                </div>
                <button onClick={this.removeExpense}>x</button>
            </div >
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => dispatch(delete_user_transaction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Allexpenses)