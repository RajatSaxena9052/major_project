import { ADD_USER, UPDATE, DELETE_USER_TRANSACTION } from "./updateType";

const initialState = {
    count: 10,
    userData: []
}

const updateReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {

        case UPDATE: return {
            ...state,
            count: state.count + payload
        }

        case ADD_USER: return {
            ...state,
            userData: [...state.userData, payload]
        }

        case DELETE_USER_TRANSACTION: console.log(payload)
            return {
                ...state,
                 userData: payload.userList.filter(data => data.id !== payload.id)

            }

        //          userData: [...payload]

        default: return state
    }
}

export default updateReducer;
