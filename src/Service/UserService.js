/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

const baseURL = 'http://localhost:8000';

class UserService{
    static async list() {
        let init = {
            method: 'GET',
            headers: {
                "Authorization": localStorage.getItem('token-victorFAU'),
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/users`, init)
    }

    static async delete(id) {
        let init = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/users/view/${id}`, init)
    }

    static async see(id) {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return await fetch(`${baseURL}/users/view/${id}`, init)

    }
}


export default UserService;