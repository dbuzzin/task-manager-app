const addTask = (task = {}) => dispatch => {

    dispatch({

        type    : "ADD_TASK",
        payload : task
    });
}

export { addTask };