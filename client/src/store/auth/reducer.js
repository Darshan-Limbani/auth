const { SET_LOGIN } = require("./actionTypes");


const authReducer = (state, action) => {
    switch (action.type) {
        case SET_LOGIN:

            break;

        default:
            return state;
    }
}

export default authReducer