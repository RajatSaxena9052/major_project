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


    required = [];

    finalDisplay = () => {
        // const totalValue = 0;
        const eachUser = new Set();
        this.state.transaction
            .filter(s => {
                if (eachUser.has(s.friendName) === false) {
                    eachUser.add(s.friendName)
                }
            })

        eachUser.forEach(s => {
            const singleUserTransaction = this.state.transaction.reduce((amount, eachTransaction) => {
                if (s === eachTransaction.friendName) {
                    if (eachTransaction.selfPaid) {
                        amount += eachTransaction.equalSplit
                    } else {
                        amount -= eachTransaction.equalSplit
                    }
                }
                return amount
            }, 0
            )

            this.required = [...this.required, { friendName: s, equalSplit: singleUserTransaction }]
        }
        )

    }


    async componentDidMount() {

        await this.balanceLoader()
        await this.finalDisplay()


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
        console.log(this.required)
        return (
            <div class="mx-auto" >

                < div class="row align-items-center justify-content-between dash-back p-2  border-2 border-bottom flex-nowrap" >

                    <div class="col text-start fs-5 fw-bold " >
                        Dashboard
                    </div>


                    {/* <div class="col"> */}
                    {/* <div class="row"> */}
                    <div class="col d-flex justify-content-end align-self-center">

                        {/* <!-- Button trigger modal --> */}
                        <Link to="/loggedin/addexpenses">
                            <button class="btn btn-sm" id="add-expense-buton">
                                Add an expense
                            </button>
                        </Link>

                        {/* <button type="button" class="btn btn-secondary">Settle up</button> */}
                        {/* </div> */}
                        {/* </div> */}
                    </div>

                </div >


                <div class="row flex-nowrap dash-back border-2 border-bottom">

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

                        // (this.state.transaction || []).map((n) => <Splitted data={n} />)
                        this.required.map((n) => <Splitted data={n} />)
                    }

                </div>

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
