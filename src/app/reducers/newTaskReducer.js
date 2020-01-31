import * as taskActions from "../actions/taskActions";
import tasksReducer from "./tasksReducer";

const newTaskState = {
    id              : undefined,
    name            : undefined,
    description     : undefined,
    userAssigned    : undefined,
    dateAssigned    : undefined,
    deadline        : undefined,
    groupID         : "g1",
    important       : false,
    sliderOpen      : false
}

const newTaskReducer = (state = {...newTaskState}, action, initState = {...newTaskState}) => {
    switch(action.type) {
        case taskActions.UPDATE_FORM_DATA: {
            return {...state, [action.field.name]: action.field.type === "checkbox" ? action.field.checked : action.field.value }
        };
        case taskActions.RESET_NEW_TASK_STATE: {
            return initState;
        }
    }
    return state;
}

export default newTaskReducer;