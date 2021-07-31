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

        return selfPaid ?
            <div class="border-2 border-bottom" style={{ display: this.state.display }}>
                <div className="row flex-nowrap">
                    <div class="col col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col col-sm-4 col-lg-6 text-start align-self-center">{description}</div>

                    <div class="col text-secondary fs-6"> You paid<br /> <span className="text-dark"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary fs-6"> You lent {friendName}<br /> <font color="#5bc5a7" ><strong> Rs {equalSplit} </strong></font></div>
                    <div class="col fw-bold d-flex align-items-center text-danger"><a type="button" onClick={this.removeExpense} > X</a></div>
                </div>
            </div >
            :
            <div class="border-2 border-bottom" style={{ display: this.state.display }}>
                <div className="row flex-nowrap">
                    <div class="col col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col col-sm-4 col-lg-6 text-start align-self-center">{description}</div>

                    <div class="col text-secondary fs-6"> {friendName} paid <br /><span className="text-dark fw-bold"> Rs {amountPaid} </span></div>
                    <div class="col text-secondary fs-6">{friendName} lent you <br /><font color="#ff652f" ><strong> Rs {equalSplit} </strong></font></div>
                    <div class="col fw-bold d-flex align-items-center text-danger"><a type="button" onClick={this.removeExpense} > X</a></div>
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