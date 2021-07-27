import React from "react";
import Splitted from "./Splitted";
// import Joi from "joi";
import { Link } from "react-router-dom";

// import Modal from "./Modal";


export default class Dashtab extends React.Component {

    constructor() {
        super()


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

    componentDidMount() {
        // console.log("AHAAAAAAAAAA", JSON.parse(localStorage.getItem("data")));

        this.setState(
            {
                // ...this.state,
                transaction: Object.values(JSON.parse(localStorage.getItem("data")) || {})
            }
        )
    }

    prevData = JSON.parse(localStorage.getItem("data")) || {};


    // addingExpenses = (event) => {
    //     // console.log(data)

    //     let {
    //         balance,
    //         owe,
    //         owed,
    //         friendName,
    //         description,
    //         amountPaid,
    //         equalSplit,
    //         selfPaid,
    //         transaction
    //     } = this.state;

    //     amountPaid = Number(amountPaid);
    //     // console.log(amountPaid)

    //     // if (friendName === "" || description === "" || amountPaid < 0.01 || ) {

    //     const schema = Joi.object({
    //         friendName: Joi.string().required().min(3).max(30),
    //         description: Joi.string().required().min(3).max(30),
    //         amountPaid: Joi.number().required().min(0.01).max(99999999)
    //     })

    //     const result = schema.validate({ friendName, description, amountPaid });

    //     if (result.error) {

    //         this.setState({
    //             modal: "",
    //             error: result.error.details[0].message.replaceAll('"', "")
    //         })
    //         // event.preventDefault();

    //         return false;

    //     } else {
    //         // event.close();
    //         this.setState({
    //             modal: "modal",
    //             error: ""
    //         })



    //         console.log(result);

    //         //     this.setState({
    //         //         error: ""
    //         //     })

    //         // }

    //         if (selfPaid) {
    //             this.setState({

    //                 transaction: [...transaction, { friendName, description, equalSplit, selfPaid }],
    //                 owed: owed += equalSplit,
    //                 balance: balance += equalSplit

    //             }, () => {
    //                 // console.log("Self");
    //                 localStorage.setItem("data", JSON.stringify({ ...this.state.transaction, ...this.prevData }));
    //             })

    //         }
    //         else {

    //             this.setState({

    //                 transaction: [...transaction, { friendName, description, equalSplit, selfPaid }],
    //                 owe: owe += equalSplit,
    //                 balance: balance -= equalSplit

    //             }, () => {
    //                 // console.log("not self data");
    //                 localStorage.setItem("data", JSON.stringify({ ...this.state.transaction, ...this.prevData }));
    //             })
    //         }
    //         return true
    //     }

    //     /*  this.setState(
    //          {
    //              transaction: [...transaction, { friendName, equalSplit, selfPaid }]
    //          })
    //      localStorage.setItem("data", JSON.stringify({ ...this.state.transaction, ...this.prevData }));
    // */

    //     // console.log(this.state.transaction);
    // }

    // amountInput = (e) => {
    //     this.setState(
    //         {
    //             amountPaid: e.target.value || 0,
    //             equalSplit: e.target.value / 2
    //         }
    //     );
    // }



    render() {

        // console.log("AHAAAAAAAAAA", JSON.parse(localStorage.getItem("data")));

        return (
            <div class="mx-auto">

                < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                    <div class="col-5 text-start">
                        <h1 class="h4" >Dashboard</h1>
                    </div>


                    <div class="col">
                        <div class="row">
                            <div class="col d-flex justify-content-end">

                                {/* <!-- Button trigger modal --> */}
                                <Link to={{
                                    pathname: "/loggedin/addexpenses",
                                    state: {

                                    }
                                }}
                                >

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

                        <span class="positive" style={{ color: "#5bc5a7" }}>
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