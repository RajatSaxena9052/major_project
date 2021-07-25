import React, { Component } from 'react'

export default class Individual extends Component {
    render() {
        return (
            < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                <div class="col-5 text-start">
                    <h1 class="h4" >Dashboard</h1>
                </div>


                <div class="col">
                    <div class="row">
                        <div class="col d-flex justify-content-end">

                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add Expense
                            </button>

                            {/* <button type="button" class="btn btn-secondary">Settle up</button> */}
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}
