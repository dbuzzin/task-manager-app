import { combineReducers } from "redux";

import groupsReducer from "./groupsReducer";
import tasksReducer from "./tasksReducer";
import newTaskReducer from "./newTaskReducer";
import modalReducer from "./modalReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    groups: groupsReducer,
    tasks: tasksReducer,
    newTask: newTaskReducer,
    modal: modalReducer,
    users: userReducer
});

export default rootReducer;