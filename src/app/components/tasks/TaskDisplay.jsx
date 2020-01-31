import React, { Component } from "react";
import TabWrapper from "./tabs/TabWrapper";
import TaskList from "./TaskList";


const TaskDisplay = () => (
    <div className="task-display">               
        <TabWrapper />
        <TaskList />  
    </div>
)

export default TaskDisplay;