import { take, put, select } from "redux-saga/effects";

import * as taskActions from "../actions/taskActions";
import * as modalActions from "../actions/modalActions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

// Task Sagas

export function* addNewTask() {
    while(true) {
        yield take(taskActions.ADD_NEW_TASK);
        yield put(taskActions.resetNewTaskState());
    }
}

export function* animateStarIcon() {
    while(true) {
        const {taskID} = yield take(taskActions.ANIMATE_STAR_ICON);
        yield delay(500);
        yield put(taskActions.setTaskOpenHold(taskID));
    }
};

export function* animateTaskComplete() {
    while(true) {
        const {taskID, groupID} = yield take(taskActions.ANIMATE_TASK_COMPLETE);
        yield delay(500);
        yield put(taskActions.setTaskComplete(taskID, groupID));
    }
};

export function* animateTaskRejected() {
    while(true) {
        const {taskID, groupID} = yield take(taskActions.ANIMATE_TASK_REJECTED);
        yield delay(500);
        yield put(taskActions.setTaskRejected(taskID, groupID));
    }
};

// Modal Sagas

export function* modalOpenDelay() {
    while(true) {
        yield take(modalActions.TOGGLE_MODAL_OPEN);
        yield delay(10);
        yield put(modalActions.modalOpenDelay());
    }
};

export function* modalFadeDelay() {
    while(true) {
        yield take(modalActions.MODAL_FADE_DELAY);
        yield delay(800);
        yield put(modalActions.toggleModalClose());
    }
};