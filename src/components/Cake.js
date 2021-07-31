import React from 'react';
import store from '../redux/store';
// import { connect } from 'react-redux';
// import { updator } from "../redux";

function Cake(props) {
    // console.log(props)
    // console.log(store.getState())
    // render() {
    return (
        <div class="row align-items-center">
            <div class="col-2 col-sm-1 bg-success" ><img src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" height="35px" alt="generalIcon" /></div>
            <div class="col-3 col-sm-5 bg-secondary text-start text-break">description</div>
            <div class="col-3 col-sm-2 bg-warning "> You paid <br /> <span className="text-dark"> Rs 1325 </span></div>
            <div class="col-3 col-sm-2 bg-info text-break"> You lent abdfdddddddddddddddc <br /> <font color="#5bc5a7" ><strong> Rs 254 </strong></font></div>
            <a class="col-1 col-sm-1 flex-end fw-bold bg-danger" type="button"> X</a>
        </div>
    )
}

export default Cake;