/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

export const redirect = () => {
    return {
        type: 'REDIRECT',
        payload: null
    }
}
export const setRole = (role) => {
    return {
        type: 'SET_ROLE',
        role: role,
        payload: null
    }
}