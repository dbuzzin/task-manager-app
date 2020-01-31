import initialState from "../../server/initialState";

const userReducer = (users = initialState.users, action) => {
    return users;
}

export default userReducer;