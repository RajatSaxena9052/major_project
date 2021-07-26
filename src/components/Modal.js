import React, { Component } from 'react'
// import Dashtab from './Dashtab';

export default class Modal extends Component {
    constructor(props) {
        super(props)

        this.state = {
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

    onTrigger = (event) => {
        console.log('here', this.props.parentCallBack(this.state))
        // this.props.parentCallback();
        // event.preventDefault();
    }

    render() {
        console.log(this.props.parentCallBack)

        return (
            <div>
                < div /* class="modal fade" */ id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >

                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add An Expense</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* modal body */}

                            <div>
                                <div class="bg-danger">
                                    {/* {this.state.error} */}
                                </div>
                            </div>

                            <div class="modal-body text-start">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">With you and </span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Enter your friends name" onChange={(e) => this.setState({ friendName: e.target.value })} required />
                                </div>


                                <div class="mb-3">
                                    <h5>Description :</h5>
                                    <input class="form-control" type="text" placeholder="Enter a description" onChange={(e) => { this.setState({ description: e.target.value }) }} required />
                                </div>


                                <div class="mb-3">
                                    <h5>Total Amount Paid Rs:</h5>
                                    <input class="form-control" type="number" min={"0"} placeholder="0.00" onChange={this.amountInput} required />
                                </div>

                                <h5>paid by you :</h5>
                                <div class="form-check">
                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                    </label>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => this.setState({ selfPaid: true })} />
                                </div>
                                <div class="form-check">

                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                        No
                                    </label>
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => this.setState({ selfPaid: false })} />

                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={this.onTrigger} /* data-bs-dismiss={this.state.modal} */ > Save changes</button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        )
    }
}
