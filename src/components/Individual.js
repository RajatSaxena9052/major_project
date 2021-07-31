import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import IndividualTransactions from './IndividualTransactions';

class Individual extends Component {

    render() {

        return (
            <div class="col">

                < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                    <div class="col fw-bold fs-5 text-start text-break">
                        {this.props.match.params.id}
                    </div>

                    {/* <div class="col"> */}
                    {/* <div class="row"> */}
                    <div class="col d-flex justify-content-end align-self-center">

                        <Link to="/loggedin/addexpenses">
                            <button class="btn btn-sm" id="add-expense-buton">
                                Add an expense
                            </button>
                        </Link>

                    </div>
                    {/* <button type="button" class="btn btn-secondary">Settle up</button> */}
                    {/* </div> */}
                    {/* </div> */}

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