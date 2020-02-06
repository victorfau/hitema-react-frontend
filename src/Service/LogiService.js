/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import {PureComponent} from 'react';

const baseURL = 'http://localhost:8000';

class LogService extends PureComponent {
    static async test(login, password) {
        let init = {
            method: 'POST',
            body: JSON.stringify({
                login: login,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/login`, init)
    }
    static async logout() {
        let init = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        };
        return fetch(`${baseURL}/logout`, init)
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
}

export default LogService;