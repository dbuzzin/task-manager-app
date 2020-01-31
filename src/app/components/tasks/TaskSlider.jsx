import React, { useState } from "react";
import { connect } from "react-redux";

import * as taskActions from "../../actions/taskActions";

const TaskSlider = ({
    taskID,
    groupID,
    open, 
    important, 
    style, 
    sliderType,
    setTaskComplete,
    setTaskRejected
    }) => {

    let isOpen = important ? "slider-closed" : open ? "slider-open" : "slider-closed";

    return ( 
        <div className={`${style} ${isOpen}`}>
            <div onClick={() => {
                groupID.match(/^(g2)$/) 
                    ? setTaskComplete(taskID)
                    : groupID.match(/^(g1)$/)
                        ? setTaskRejected(taskID)
                        : null;
                }}>{sliderType}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    let style = ownProps.groupID.match(/^(g1)$/)
        ? ownProps.important
            ? "task__inactive" : "task__reject"
        : ownProps.groupID.match(/^(g2)$/)
            ? "task__complete" : null;
    return ({
        sliderType: ownProps.groupID.match(/^(g2)$/) ? "Complete" : ownProps.important ? null : "Reject",
        state: state.taskSlider,
        style
    });  
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setTaskComplete: (taskID) => {
            dispatch(taskActions.animateTaskComplete(taskID));
        },
        setTaskRejected: (taskID) => {
            dispatch(taskActions.animateTaskRejected(taskID));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskSlider);
