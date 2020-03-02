/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

const initialState = {
    name: false,
    lastName: false,
    redirection: false,
    role: ''
}

// todo faire le reset

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONNEXION':
            return {...state, isLogged: !state.isLogged}
        case 'MODAL':
            return {...state, showModal: !state.showModal}
        case 'REDIRECT':
            return {...state, redirection: true}
        default:
            return state
    }
}

export default UserReducer