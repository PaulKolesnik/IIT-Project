import {
    LOGIN,
    LOGOUT
} from '../actions/users'

const initialState = {
    username: localStorage.getItem('username') || '',
    id: localStorage.getItem('_id') || '',
    token: localStorage.getItem('token') || ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                username: action.userData.username,
                    id: action.userData.id,
                    token: action.userData.token,
            }
            case LOGOUT:
                return {
                    ...initialState
                }
                default:
                    return state
    }
}

export default usersReducer