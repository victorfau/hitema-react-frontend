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
        case 'SET_NOT_CONNECTED':
            return {...state, isLogged: false}
        case 'SET_CONNECTED':
            return {...state, isLogged: true}
        case 'MODAL':
            return {...state, showModal: !state.showModal}
        default:
            return state
    }
}

export default loggedReducer