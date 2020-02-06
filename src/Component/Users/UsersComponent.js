/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import TitleAsset from "../Assets/TitleAsset"
import UserService from "../../Service/UserService"
import {NotificationManager} from "react-notifications"
import {Form, Col} from 'react-bootstrap'
import {Link} from "react-router-dom"

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
            if (data.code === 3 || data.code === 4){
                NotificationManager.error(data.message)
                this.props.history.push('/')
                this.props.setLogged()
            }

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
        let data = [...this.state.preusers]
        let result = data.filter(user => user.name.includes(event.target.value) !== false || user.lastName.includes(event.target.value) !== false);
        this.setState({users: result})
    }

    handleOrder(order, event){
        console.log(event.target)
        // todo fonction de trie
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
                        <td>{element.name}</td>
                        <td>{element.lastName}</td>
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
        const NoItem = () => (
            <tbody>
            <tr>
                <td/>
                <td/>
                <td><i>No Item found</i></td>
                <td/>
                <td/>
            </tr>
            </tbody>
        )

        return (
            <div className="container">
                <TitleAsset title={"Users"}/>
                <div className="mb-5">
                    <Form className="test">
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    type='text'
                                    placeholder='Rechercher un prenom'
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </div>

                <table className='table'>
                    <thead>
                    <tr>
                        <th onClick={this.handleOrder.bind(this, 'name')}>prénom</th>
                        <th onClick={this.handleOrder.bind(this, 'lastName')}>nom</th>
                        <th onClick={this.handleOrder.bind(this, 'email')}>email</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    {
                        (this.state.users.length > 0) ? <List/> : <NoItem/>
                    }

                </table>
            </div>
        )
    }
}

const stateMap = (store) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setLogged: () => dispatch({type: 'MODAL'})
    }
}

export default connect(stateMap, mapDispatchToProps)(UsersComponent);