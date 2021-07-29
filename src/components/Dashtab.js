import React from "react";
import { connect } from "react-redux";

import Splitted from "./Splitted";
import { Link } from "react-router-dom";


class Dashtab extends React.Component {


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
            DATA: null
        }
    }

    // handleCallBack = (childData) => {
    //     // this.setState({ DATA: childData });
    //     console.log(childData, "parent se aya data");
    // }

    balanceLoader = () => {
        this.setState(
            {
                transaction: [...this.props.userList]
            }
        )
    }


    async componentDidMount() {

        await this.balanceLoader()

        // console.log(this.state.transaction);

        this.state.transaction.forEach(t => {
            // console.log(t)
            if (t.selfPaid === true) {
                this.setState(
                    {
                        owed: this.state.owed + t.equalSplit,
                        balance: this.state.balance + t.equalSplit

                    })
            }
            else {
                this.setState({
                    owe: this.state.owe + t.equalSplit,
                    balance: this.state.balance - t.equalSplit
                })
            }
        })

    }

    render() {


        return (
            <div class="mx-auto" >

                < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                    <div class="col-5 text-start">
                        <h1 class="h4" >Dashboard</h1>
                    </div>


                    <div class="col">
                        <div class="row">
                            <div class="col d-flex justify-content-end">

                                {/* <!-- Button trigger modal --> */}
                                <Link to="/loggedin/addexpenses">
                                    <button type="button" class="btn btn-primary" /* data-bs-toggle="modal" data-bs-target="#exampleModal" */>
                                        Add Expense
                                    </button></Link>

                                {/* <button type="button" class="btn btn-secondary">Settle up</button> */}
                            </div>
                        </div>
                    </div>

                </div >


                <div class="row dash-back border-2 border-bottom">

                    <div class="block col"  >
                        <div class="title">
                            total balance
                        </div>

                        <span class="positive" style={this.state.balance > 0 ? { color: "#5bc5a7" } : { color: "#ff652f" }}>
                            Rs {this.state.balance}
                        </span>
                    </div>

                    <div class="block col">
                        <div class="title  text-dark">
                            you owe
                        </div>
                        <span class="negative" style={{ color: "#ff652f" }}>
                            Rs {this.state.owe}
                        </span>
                    </div>

                    <div class="block col">
                        <div class="title  text-dark">
                            you are owed
                        </div>
                        <span class="positive" style={{ color: "#5bc5a7" }}>
                            Rs {this.state.owed}
                        </span>
                    </div>
                </div >

                <div>
                    {
                        (this.state.transaction || []).map((n) => <Splitted data={n} />)
                    }

                </div>


                {/* <Modal parentCallBack={this.addingExpenses} /> */}


                {/*  <!-- Modal -->s*/}
                {/* 
                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                    <div class="modal-dialog ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Add An Expense</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                             //  modal body 
                            {this.state.errors}

                            <div>
                                <div class="bg-danger">
                                    {this.state.error}
                                </div>
                            </div>

                            <div class="modal-body text-start">
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">With you and </span>
                                    <input type="text" class="form-control" aria-label="Sizing example input" placeholder="Enter your friends name" onChange={(e) => this.setState({ friendName: e.target.value })} required />
                                </div>


                                <div class="mb-3">
                                    <h5>Description :</h5>
                                    <input class="form-control" type="text" placeholder="Enter a description" onChange={(e) => { this.setState({ description: e.target.value }) }} required></input>
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
                                <button type="button" class="btn btn-primary" onClick={this.addingExpenses} data-bs-dismiss={this.state.modal} > Save changes</button>
                            </div>
                        </div>
                    </div > 

            </div >*/}



            </div >


        );
    }
}


const mapStateToProps = (state) => {
    return {
        userList: state.userData
    }
}


export default connect(mapStateToProps)(Dashtab)
