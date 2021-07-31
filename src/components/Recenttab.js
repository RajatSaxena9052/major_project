import React from "react";
import Activities from "./Activities";

import { connect } from "react-redux";

class Recentab extends React.Component {

    render() {
        const { userList = [] } = this.props

        const data = userList;

        return (
            <div class="mx-auto" >
                < div class="row align-items-center justify-content-between dash-back p-2 " >
                    <div class="col text-start fs-5 fw-bold" >
                        Recent activity
                    </div>
                </div >
                <div>
                    <Activities data={data} />
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

export default connect(
    mapStateToProps
)(Recentab)
