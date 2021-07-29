import React from 'react';
import { Link } from 'react-router-dom';
import Allexpenses from './Allexpenses';
import { connect } from "react-redux";

class Allexpensetab extends React.Component {
    constructor() {
        super()

        this.state = {
            transaction: []
        }
    }

    componentDidMount() {

        this.setState({
            transaction: [...this.props.userList]
        })

    }


    render() {

        return (
            <div>
                < div class="row d-flex align-items-center justify-content-between dash-back p-2  border-2 border-bottom" >

                    <div class="col-5 text-start ">
                        <h1 class="h4" >All Expenses</h1>
                    </div>


                    <div class="col" >
                        <div class="row">
                            <div class="col d-flex justify-content-end">

                                {/* <!-- Button trigger modal --> */}
                                <Link to="/loggedin/addexpenses">
                                    <button type="button" class="btn btn-primary" /* data-bs-toggle="modal" data-bs-target="#exampleModal" */>
                                        Add an expense
                                    </button>
                                </Link>

                                {/* <button type="button" class="btn btn-secondary">Settle up</button> */}
                            </div>
                        </div>
                    </div>

                </div >
                <div>
                    {
                        (this.state.transaction || []).map((n) => <Allexpenses data={n} />)
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userData
    }
}


export default connect(mapStateToProps)(Allexpensetab)