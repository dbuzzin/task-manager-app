import * as modalActions from "../actions/modalActions";

const modalState = {
    open        : false, 
    styles: {
        enter   : "modal-open",
        active  : "modal-backdrop",
        leave   : "modal-fade",
    }
}

const modalReducer = (state = {...modalState}, action, initState = {...modalState}) => {
    switch(action.type) {
        case modalActions.MODAL_OPEN_DELAY: {
            let modal = {...state};
            Object.assign(modal, {styles: { active: `${initState.styles.active} ${initState.styles.enter}`}});
            return modal;
        }
        case modalActions.TOGGLE_MODAL_OPEN: {
            let modal = {...state};
            return {...modal, open: true};
        }
        case modalActions.MODAL_FADE_DELAY: {
            let modal = {...state};
            Object.assign(modal, {styles: { active: `${modal.styles.active} ${initState.styles.leave}`}});
            return modal;
        }
        case modalActions.TOGGLE_MODAL_CLOSE: {
            return initState;
        }
    }
    return state;
}

export default modalReducer;