export const LOGIN = 'LOGIN_USER'
export const LOGOUT = 'LOGOUT_USER'

export const logoutUser = () => {
    return dispatch => {
        localStorage.removeItem('username')
        localStorage.removeItem('_id')
        localStorage.removeItem('token')
        try {
            dispatch({
                type: LOGOUT,
            })
        } catch (err) {
            throw new Error('Failed')
        }
    }
}

export const loginUser = (username, id, token) => {
    return dispatch => {
        try {
            dispatch({
                type: LOGIN,
                userData: {
                    username,
                    id,
                    token
                }
            })
        } catch (err) {
            throw new Error('Failed');
        }
    }
}