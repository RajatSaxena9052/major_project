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
            <div class="p-2" style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-6 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> You paid<br /> <span className="text-dark"> Rs {amountPaid} </span></div>

                    <div class="col text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" > Rs <span> {equalSplit} </span></font></div>
                    <div class="col-1 d-flex align-items-center text-danger"><a type="button" onClick={this.removeExpense} > X</a></div>
                </div>
            </div >
            :
            <div class="p-2" style={{ display: this.state.display }}>
                <div className="row">
                    <div class="col-6 text-start align-self-center">{description}</div>
                    <div class="col text-secondary"> {friendName} paid <br /><span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary">{friendName} lent you <br /><font color="#ff652f" > <span> Rs {equalSplit} </span></font></div>
                    <div class="col-1 d-flex align-items-center text-danger"><a type="button" onClick={this.removeExpense} > X</a></div>
                </div>
              
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