/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import '../../store';
import '../../CSS/Login/Login.css';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {NotificationManager} from "react-notifications";
import LogService from "../../Service/LogiService";
import {resolveToLocation} from "react-router-dom/modules/utils/locationUtils";

class LoginComponent extends PureComponent {

    state = {
        redirect: false
    }

    componentDidMount() {
        if (this.props.redirect === true){
            this.props.setModal()
            NotificationManager.error('erreur')
            this.props.history.push('/')
        }
    }

    handleClick = (event) => {
        if (event.target === document.getElementById('close')){
            this.props.setModal()
        }
    }
    async handleSubmit() {
        let login = document.getElementById('login').value
        let password = document.getElementById('password').value
        let test = await LogService.test(login, password);
        if (test.ok){
            let response = await test.json()
            console.log(response)
            if(response.code === 0){
                this.props.setModal()
                this.props.setLogged()
                NotificationManager.success('Vous êtes connecté(e)')
                localStorage.setItem('token-victorFAU', response.data.token)
                localStorage.setItem('role-victorFau', response.data.role)
                if (response.data.role === 'admin'){
                    this.props.setAdmin()
                }
                this.props.setRole(response.data.role)
                return <Redirect to={'/users'} />
            }else{
                NotificationManager.error(response.message)
            }
        }

    }

    render() {
        const Display = () =>  (
            <div id="close" onClick={(event) => this.handleClick(event)} className="loginContainer">
                <div className="loginForm">
                    <form>
                        <div>
                            <label>Login</label>
                            <input id='login' type="text"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input id='password' type="password"/>
                        </div>
                        <div>
                            <Button onClick={this.handleSubmit.bind(this)}>
                                Connecter
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        )
        const Show = () => this.props.modal ? <Display/> : null
        const Redirection = () => this.state.redirect ? <Redirect to='/users' /> : null
        return (
            <div>
                <Redirection/>
                <Show />
            </div>
        );
    }
}
const stateMap = (store) => {
    return {
        modal: store.logged.showModal,
        redirect: store.user.redirection,
        role: store.user.role
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        setModal: () => dispatch({type: 'MODAL'}),
        redirect: () => dispatch({type: 'REDIRECT'}),
        setAdmin : () => dispatch({type: 'SET_ADMIN'}),
        setRole: (role) => dispatch({type: 'SET_ROLE', role: role}),
        setLogged: () => dispatch({type: 'SET_CONNECTED'}),
        unsetLogged: () => dispatch({type: 'SET_NOT_CONNECTED'})
    }
}
export default connect(stateMap, mapDispatchToProps)(LoginComponent);