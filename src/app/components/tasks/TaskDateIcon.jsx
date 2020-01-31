import React from "react";

import { connect } from "react-redux";

const TaskDateIcon = () => (
    <div className="task__body-date">
        <i className="far fa-calendar-alt"></i>
    </div>
);

const mapStateToProps = state => ({

    ...state
});



export default connect(mapStateToProps, null)(TaskDateIcon);