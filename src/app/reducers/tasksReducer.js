import uuid from "uuid";

import initialState from "../../server/initialState";

import * as taskActions from "../actions/taskActions";

const tasksReducer = (tasks = initialState.tasks, action) => {

    const getTask = (val, key, state) => {
        let [t] = state.filter(res => res[key] === val);
        return t;
    }

    switch(action.type) {
        case taskActions.ADD_NEW_TASK: {
            let newTask = {...action.newTaskData};
            Object.assign(newTask, {
                id: uuid,
                dateAssigned: Date.now
            });
            return [...tasks, newTask];
        };
        case taskActions.SET_TASK_OPEN_HOLD: {
            let thisTask = getTask(action.taskID, "id", tasks);
            if(thisTask.groupID.match(/^(g(1|3))$/)) {
                thisTask.groupID = "g2";
                thisTask.important = false;
            } else if(thisTask.groupID === "g2") {
                thisTask.groupID = "g3";
            }
            return [...tasks];
        };
        case taskActions.TOGGLE_SLIDER: {
            let thisTask = getTask(action.taskID, "id", tasks);
            !action.important && action.groupID.match(/^(g(1|2))$/)
                ? thisTask.sliderOpen = !thisTask.sliderOpen 
                : [...tasks];
            return [...tasks];
        };
        case taskActions.SET_TASK_COMPLETE: {
            let thisTask = getTask(action.taskID, "id", tasks);
            thisTask.groupID === "g2" ? thisTask.groupID = "g4" : [...tasks];
            return [...tasks]
        };
        case taskActions.SET_TASK_REJECTED: {
            let thisTask = getTask(action.taskID, "id", tasks);
            thisTask.groupID === "g1" ? thisTask.groupID = "g5" : [...tasks];
            return [...tasks]
        };
    };
    return tasks;
};

export default tasksReducer;