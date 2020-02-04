/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {Component} from 'react';
import TitleAsset from "../Assets/TitleAsset";
import UserService from "../../Service/UserService";
import {NotificationManager} from "react-notifications";
import {Form, Col} from 'react-bootstrap'
import {Link} from "react-router-dom";

class UsersComponent extends Component {

    state = {
        auth: {
            auth: false,
            role: 0
        },
        users: []
    };

    async componentDidMount() {
        let response = await UserService.list();
        if (response.ok) {
            let data = await response.json();
            this.setState({
                // state ustilisé pour l'affichage
                users: data.data,
                // state utilsé pour le filtrage
                preusers: data.data,
            })

        }
    }

    // fontion de filtrage
    handleChange(event) {
        console.log(event.target.value)
        let data = [...this.state.preusers]
        let result = data.filter(user => user.name.includes(event.target.value) !== false);
        this.setState({users: result})
    }

    // fonction de suppression
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
        /**
         * @return le body du tableau avec les items
         */
        const List = () => (
            <tbody>
            {
                this.state.users.map((element, key) => (
                    <tr key={key}>
                        <td>{element.name} - {element.lastName}</td>
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
            <div className="container">
                <TitleAsset title={"Users"}/>
                <div className="mb-5">
                    <Form className="test">
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type='text'
                                    name='username'
                                    placeholder='enter'
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </div>

                <table className='table'>
                    <thead>
                    <tr>
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