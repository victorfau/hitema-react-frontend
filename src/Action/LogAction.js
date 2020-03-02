/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

export const modal = () => {
    return {
        type: 'MODAL',
        payload: null
    }
}

export const connexion = () => {
    return {
        type: 'CONNEXION',
        payload: null
    }
}
export const setLogged = () => {
    return {
        type: 'SET_CONNECTED',
        payload: null
    }
}
export const unsetLogged = () => {
    return {
        type: 'SET_NOT_LOGGED',
        payload: null
    }
}
export const setLoading = () => {
    return {
        type: 'SET_LOADING',
        payload: null
    }
}
export const unsetLoading = () => {
    return {
        type: 'UNSET_LOADING',
        payload: null
    }
}
//export const