const initialState = [
    
    {
        description     : "Description of task and what needs to be done.",
        userAssigned    : "User Name",
        dateAssigned    : "...",
        dateDeadline    : "...",
        isOpen          : false,
        important       : true
    },
    {
        description     : "Another desciption of a task which needs doing. The star being orange shows this one is open.",
        userAssigned    : "User Name",
        dateAssigned    : "...",
        dateDeadline    : "...",
        isOpen          : true,
        isOptional      : false
    }
    
]

const taskReducer = (state = initialState, action) => {

    switch(action.type) {

        case "ADD_TASK": {
            
            return state = [...state, action.payload];
        }

        default:
            return state;
    }
}

export default taskReducer;