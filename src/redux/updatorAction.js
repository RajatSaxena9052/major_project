import { ADD_USER, UPDATE, DELETE_USER_TRANSACTION } from "./updateType";

export const updator = (payload) => {
    return {
        type: UPDATE,
        payload
    }
}

export const addUser = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}

export const delete_user_transaction = (payload) => {
    // console.log(payload)
    return {
        type: DELETE_USER_TRANSACTION,
        payload
    }
}
// {id,userList}

//payload:paylaod.userList.filter(s=> s.id !== payload.id)