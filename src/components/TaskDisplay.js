import React, { Component } from "react";
import TabWrapper from "./TabList";
import TaskList from "./TaskList";


class TaskDisplay extends Component {

    render() {

        return(

                <div className="task-display">
                    
                    <TabWrapper />

                    <TaskList />
                    
                </div>
            
        );
    }
}

export default TaskDisplay;