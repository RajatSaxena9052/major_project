import React, { Component } from 'react'
import Joi from 'joi';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { updator, addUser } from "../redux";


class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: uuidv4(),
            modal: "",
            friendName: "",
            description: "",
            amountPaid: 0,
            equalSplit: 0,
            selfPaid: true,
            balance: 0,
            owe: 0,
            owed: 0,
            transaction: [],
            error: "",
            status: "",
            setValue: "",
        }

    }


    componentDidMount() {

        this.setState(
            {
                transaction: Object.values(JSON.parse(localStorage.getItem("data")) || {})
            }
        )
    }

    addingExpenses = (event) => {

        let {
            id,
            balance,
            owe,
            owed,
            friendName,
            description,
            amountPaid,
            equalSplit,
            selfPaid,
            transaction
        } = this.state;

        amountPaid = Number(amountPaid);

        const schema = Joi.object({
            friendName: Joi.string().alphanum().trim().required().min(3).max(20).strict(),
            description: Joi.string().alphanum().trim().required().min(3).max(20).strict(),
            amountPaid: Joi.number().required().min(0.01).max(99999999).strict()
        })

        const result = schema.validate({ friendName, description, amountPaid });

        if (result.error) {

            this.setState({
                modal: "",
                error: result.error.details[0].message.replaceAll('"', "")
            })

            return false;

        } else {
            this.setState({
                modal: "modal",
                error: "",
                status: "Expense Added"
            })

            setTimeout(() => {
                this.setState({
                    status: ""
                })
            }, 2 * 1000)


            this.setState({
                friendName: "",
                description: ""
            })


            this.props.addUserHandler({ id, friendName, description, equalSplit, selfPaid, amountPaid })

            if (selfPaid) {

                this.setState({
                    id: uuidv4(),
                    transaction: [...transaction, { id, friendName, description, equalSplit, selfPaid, amountPaid }],
                    owed: owed += equalSplit,
                    balance: balance += equalSplit
                })

            }
            else {

                this.setState({
                    id: uuidv4(),
                    transaction: [...transaction, { id, friendName, description, equalSplit, selfPaid, amountPaid }],
                    owe: owe += equalSplit,
                    balance: balance -= equalSplit

                })

            }
            return true
        }

    }


    amountInput = (e) => {
        this.setState(
            {
                amountPaid: e.target.value || 0,
                equalSplit: e.target.value / 2
            }
        );
    }

    // onTrigger = (event) => {
    // console.log('here', this.props.parentCallBack(this.state));
    // this.props.parentCallBack(this.state);
    // this.props.parentCallback();
    // event.preventDefault();
    // }

    render() {

        return (
            <div>
                < div /* class="modal fade" */ id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >

                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add An Expense</h5>
                                {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            </div>
                            {/* modal body */}

                            <div>
                                <div class="bg-danger text-white fw-bold rounded">
                                    {this.state.error}
                                </div>
                            </div>

                            <div class="modal-body text-start">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">With you and </span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Enter your friends name" value={this.state.friendName} onChange={(e) => this.setState({ friendName: e.target.value })} required />
                                </div>


                                <div class="mb-3">
                                    <h5>Description:</h5>
                                    <input class="form-control" type="text" placeholder="Enter a description" value={this.state.description} onChange={(e) => { this.setState({ description: e.target.value }) }} required />
                                </div>


                                <div class="mb-3">
                                    <h5>Total Amount Paid Rs:</h5>
                                    <input class="form-control" type="number" min={"0"} placeholder="0.00" value={this.state.amountPaid} onChange={this.amountInput} required />
                                </div>

                                <h5>Paid by you:</h5>
                                <div class="form-check">
                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => this.setState({ selfPaid: true })} />
                                </div>
                                <div class="form-check">

                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={() => this.setState({ selfPaid: false })} />

                                </div>

                            </div>
                            <div class="modal-footer">

                                <div>
                                    <div class="bg-success text-white fw-bold rounded">
                                        {this.state.status}
                                    </div>

                                </div>
                                <button type="button" class="btn btn-primary" onClick={this.addingExpenses}> Save changes</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updator: () => dispatch(updator()),
        addUserHandler: (payload) => dispatch(addUser(payload))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Modal);