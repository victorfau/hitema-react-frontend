/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import {PureComponent} from 'react';

const baseURL = 'http://localhost:8000';

class UserService extends PureComponent {
    static async list() {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/articles`, init)
    }

    static async delete(id) {
        let init = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/articles/view/${id}`, init)
    }

    static async see(id) {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return await fetch(`${baseURL}/articles/view/${id}`, init)

    }

    static async home(id) {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return await fetch(`${baseURL}/articles/home`, init)

    }
}

export default UserService;