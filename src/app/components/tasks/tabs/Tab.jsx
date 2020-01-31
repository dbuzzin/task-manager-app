import React, { Fragment } from "react";
import { connect } from "react-redux";

import * as tabActions from "../../../actions/tabActions";

const Tab = ({id, name, style, isOpen, switchOpenTab}) => (
    <Fragment>
        <div className={`${style} ${isOpen ? "open" : "closed"}`} onClick={() => switchOpenTab(id, !isOpen)}>
            <div>
                {name}
            </div>
        </div>
    </Fragment>
);

const mapDispatchToProps = dispatch => {
    return {
        switchOpenTab: (id, isOpen) => {
            dispatch(tabActions.switchOpenTab(id, isOpen));
        }
    }
};

export default connect(null, mapDispatchToProps)(Tab);