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
            <div class="pt-3 pb-3 border-2 border-bottom mb-2" style={{ display: this.state.display }}>
                <div className="row justify-content-center align-items-center">
                    <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col-8 col-sm-5 text-start text-break">{description}</div>
                    <div class="col-1 col-sm-1 fw-bold order-sm-last text-danger">
                        <a type="button " onClick={this.removeExpense} > X</a>
                    </div>
                    <div class="col-6 col-sm-2 align-self-start mt-2 mt-sm-0 text-secondary"> You paid<br /> <strong className="text-dark"> Rs {amountPaid} </strong></div>
                    <div class="col-6 col-sm-2 text-break align-self-start mt-2 mt-sm-0 text-secondary"> You lent {friendName}<br /> <font color="#5bc5a7" ><strong> Rs {equalSplit} </strong></font></div>
                </div>
            </div >
            :
            <div class="pt-3 pb-3 border-2 border-bottom mb-2" style={{ display: this.state.display }}>
                <div className="row justify-content-center align-items-center">
                    <div class="col-2 col-sm-1 align-self-center"><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
                    <div class="col-8 col-sm-5 text-start text-break">{description}</div>
                    <div class="col-1 col-sm-1 fw-bold order-sm-last text-danger">
                        <a type="button" onClick={this.removeExpense} > X</a>
                    </div>
                    <div class="col-6 col-sm-2  text-break align-self-start mt-2 mt-sm-0 text-secondary"> {friendName} paid <br /><span className="text-dark fw-bold"> Rs {amountPaid} </span></div>
                    <div class="col-6 col-sm-2 text-break align-self-start mt-2 mt-sm-0 text-secondary">{friendName} lent you <br /><font color="#ff652f" ><strong> Rs {equalSplit} </strong></font></div>
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