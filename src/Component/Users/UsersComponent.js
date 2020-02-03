/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {Component} from 'react';
import TitleAsset from "../Assets/TitleAsset";
import UserService from "../../Service/UserService";
import {NotificationManager} from "react-notifications";
import {Link} from "react-router-dom";

class UsersComponent extends Component {

    state = {
        users: []
    };

    async componentDidMount() {
        let response = await UserService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({users: data})

        }
    }

    async handleDelete(id) {
        let response = await UserService.delete(id);
        if (response.ok) {
            let datas = [...this.state.users];
            let index = datas.findIndex(users => users.id === id);
            datas.splice(index, 1);
            this.setState({users: datas});
            NotificationManager.error('Utilisateur correctement supprimé');
        }
    }

    render() {

        const List = () => (
            <tbody>
            {
                this.state.users.map((element, key) => (
                    <tr key={key}>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.email}</td>
                        <td>users</td>
                        <td>
                            <button onClick={() => this.handleDelete(element.id)} className="btn btn-danger">
                                DELETE
                            </button>
                            <Link to={`/users/${element.id}`} className="btn btn-info">DETAIL</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        );

        return (
            <div>
                <TitleAsset title={"Users"}/>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>nom - prénom</th>
                        <th>email</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <List/>
                </table>
            </div>
        )
    }
}

export default UsersComponent;