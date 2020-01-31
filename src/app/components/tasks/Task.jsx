import React from "react";
import { connect } from "react-redux";

import * as taskActions from "../../actions/taskActions";

import TaskSlider from "./TaskSlider";
import TaskStarIcon from "./TaskStarIcon";
import TaskDateIcon from "./TaskDateIcon";

const Task = ({
        desc, 
        id,
        groupID, 
        userAssigned, 
        important,
        sliderOpen,
        isOpen,
        showSlider,
        toggleSlider,
        showStarIcon
    }) => (
    <div className="task inner-shadow-bottom-tiny">
        {!showSlider ? null : (
            <TaskSlider taskID={id} open={sliderOpen} taskID={id} groupID={groupID} important={important}/>
        )}
        <div className="task__body" onClick={() => toggleSlider(id, groupID, important)}>
            <div className="task__body-top">
                <div className="task__body-desc">
                {desc}
                </div>
                {!showStarIcon ? null : (
                    <TaskStarIcon taskID={id} groupID={groupID} isOpen={isOpen}/>
                )}
            </div>
            <div className="task__body-bottom">
                <div className="task__body-user">
                    <i className="fas fa-user-circle"></i>
                    <span className="user-name">{userAssigned}</span>
                </div>
                <TaskDateIcon />
            </div>
        </div>
    </div>
);

const mapStateToProps = (state, ownProps) => {
    return {
        isOpen: ownProps.groupID.match(/^(g2)$/),
        showSlider: ownProps.groupID.match(/^(g(1|2))$/),
        showStarIcon: !ownProps.groupID.match(/^(g(4|5))$/)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleSlider: (taskID, groupID, important) => {
           dispatch(taskActions.toggleSlider(taskID, groupID, important));
       }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);