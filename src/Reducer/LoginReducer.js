/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

    const initialState = {
        isLogged: false,
        showModal: false,
        showLoading: false,
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
            case 'SET_LOADING':
                return {...state, showLoading: true}
            case 'UNSET_LOADING':
                return {...state, showLoading: false}
            case 'SET_ADMIN':
                return {...state, isAdmin: true}
            case 'MODAL':
                return {...state, showModal: !state.showModal}
            default:
                return state
        }
    }

export default loggedReducer