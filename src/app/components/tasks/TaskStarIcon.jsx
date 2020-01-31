import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { connect } from "react-redux";

import * as taskActions from "../../actions/taskActions";

const TaskStarIcon = ({taskID, groupID, starColor, setTaskOpenHold}) => {

    const starTransition = [
        {
            from    : "star-inactive",
            to      : "star-active"
        },
        {
            from    : "star-active",
            to      : "star-hold"
        },
        {
            from    : "star-hold",
            to      : "star-active"
        }
    ];

    const [style, set] = useState(starColor);

    const changeColor = (init, f, arr) => {
        arr.forEach(star => {
            star.from === init ? f(star.to) : null
        });
    };

    return (
        <div className="task__body-star">
            <i className={`fas fa-star ${style}`} onClickCapture={(e) => {
                changeColor(starColor, set, starTransition), 
                setTaskOpenHold(taskID),
                e.stopPropagation()
                }}></i>
        </div>
    )
};

const mapStateToProps = (state, ownProps)=> {
    let starColor = ownProps.groupID.match(/^(g2)$/)
    ? "star-active" : ownProps.groupID.match(/^(g3)$/)
        ? "star-hold" : "star-inactive";
    return ({
        starColor,
        isShown: ownProps.groupID.match(/^(g(4|5))$/)
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {

    return ({
        setTaskOpenHold: (taskID) => {
            dispatch(taskActions.animateStarIcon(taskID));
        }
    });
};



export default connect(mapStateToProps, mapDispatchToProps)(TaskStarIcon);