import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import IndividualTransactions from './IndividualTransactions';

class Individual extends Component {


    render() {

        // console.log(this.props);

        return (
            <div class="col">
                < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                    <div class="col fw-bold fs-4 text-start">
                        {this.props.match.params.id}
                    </div>


                    <div class="col">
                        <div class="row">
                            <div class="col d-flex justify-content-end">

                                <Link to="/loggedin/addexpenses">
                                    <button type="button" class="btn" id="add-expense-buton">
                                        Add Expense
                                    </button></Link>
                                {/* <button type="button" class="btn btn-secondary">Settle up</button> */}

                            </div>
                        </div>
                    </div>
                </div >
                <div >
                    {
                        this.props.userList
                            .filter(user => this.props.match.params.id === user.friendName)
                            .map(user => <IndividualTransactions data={user} />)
                    }
                </div>

            </div >
        )
    }
}


const mapStateToProps = (state) => {
    return {
        userList: state.userData
    }
}


export default connect(mapStateToProps)(Individual)