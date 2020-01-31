import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const TaskList = ({tasks}) => (
    <div className="task-display__main">
        { tasks.map((task, index) => (
            
            <Task 
                desc={task.description}
                id={task.id}
                groupID={task.groupID}
                userAssigned={task.userAssigned}
                important={task.important}
                sliderOpen={task.sliderOpen}
                key={task.id}/>
        ))}
    </div>
);

const mapStateToProps = state => {
    const [currentGroup] = state.groups.filter(tab => tab.selected);
    return ({
        ...state,
        tasks: state.tasks.filter(task => task.groupID === currentGroup.id)
    });
};



export default connect(mapStateToProps)(TaskList);