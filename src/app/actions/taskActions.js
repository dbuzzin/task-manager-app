export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const RESET_NEW_TASK_STATE = "RESET_NEW_TASK_STATE";
export const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
export const TOGGLE_SLIDER = "TOGGLE_SLIDER";

export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const ANIMATE_TASK_COMPLETE = "ANIMATE_TASK_COMPLETE";
export const SET_TASK_REJECTED = "SET_TASK_REJECTED";
export const ANIMATE_TASK_REJECTED = "ANIMATE_TASK_REJECTED";

export const ANIMATE_STAR_ICON = "ANIMATE_STAR_ICON";
export const SET_TASK_OPEN_HOLD = "SET_TASK_OPEN";

export const updateFormData = (field) => ({
    type: UPDATE_FORM_DATA,
    field
});

export const addNewTask = (newTaskData) => ({
    type: ADD_NEW_TASK,
    newTaskData
});

export const resetNewTaskState = () => ({
    type: RESET_NEW_TASK_STATE
});

export const toggleSlider = (taskID, groupID, important) => ({
    type: TOGGLE_SLIDER,
    taskID,
    groupID,
    important
});

export const setTaskComplete = (taskID) => ({
    type: SET_TASK_COMPLETE,
    taskID
});

export const animateTaskComplete = (taskID, groupID) => ({
    type: ANIMATE_TASK_COMPLETE,
    taskID,
    groupID
});

export const setTaskRejected = (taskID) => ({
    type: SET_TASK_REJECTED,
    taskID
});

export const animateTaskRejected = (taskID, groupID) => ({
    type: ANIMATE_TASK_REJECTED,
    taskID,
    groupID
});

export const animateStarIcon = (taskID) => ({
    type: ANIMATE_STAR_ICON,
    taskID
});

export const setTaskOpenHold = (taskID) => ({
    type: SET_TASK_OPEN_HOLD,
    taskID
});