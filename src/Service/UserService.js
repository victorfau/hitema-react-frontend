/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import {PureComponent} from 'react';

const baseURL = 'https://jsonplaceholder.typicode.com';

class UserService extends PureComponent {
    static async list() {
        let init = {
            method: 'GET',
            headers: {
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
        return fetch(`${baseURL}/users/${id}`, init)
    }

    static async see(id) {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/users/${id}`, init)
    }
}

export default UserService;