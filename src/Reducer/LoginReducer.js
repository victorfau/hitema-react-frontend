/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

const initialState = {
    isLogged: false,
    showModal: false,
    isAdmin: false
}

const loggedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONNEXION':
            return {...state, isLogged: !state.isLogged}
        case 'OPEN_MODAL':
            return {...state, showModal: true}
        case 'CLOSE_MODAL':
            return {...state, showModal: false}
        default:
            return state
    }
}

export default loggedReducer