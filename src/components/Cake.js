import React from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import { updator } from "../redux";

function Cake(props) {
    console.log(props)
    console.log(store.getState())
    // render() {
    return (
        <div>
            <h2>hello - {props.c}</h2>
            <button onClick={props.updator}>
                count
            </button>
        </div>
    )
}
// }
const mapStateToProps = (state) => {
    return {
        c: state.count
     }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updator: () => dispatch(updator(20))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cake);