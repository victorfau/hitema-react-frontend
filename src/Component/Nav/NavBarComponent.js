import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import '../../CSS/Nav/style.css';
import LogService from "../../Service/LogiService";
import {NotificationManager} from "react-notifications";

class NavBarComponent extends Component {

    componentDidMount() {
        if (localStorage.getItem('token-victorFAU')) {
            this.props.setLoggedButton()
        }
        if (localStorage.getItem('role-victorFAU') === 'admin') {
            this.props.setAdmin()
        }
    }

    handleClick = () => {
        this.props.setLogged()
    }

    async handleDeconnexion() {
        let response = await LogService.logout();
        if (response.ok) {
            localStorage.clear()
            this.props.unsetLogged()

            NotificationManager.success('success')
        }
    }

    render() {
        const Log = () => (<Button onClick={() => this.handleClick()} className="navbar-brand">Connexion</Button>)
        const Unlog = () => (
            <Button onClick={this.handleDeconnexion.bind(this)} className="navbar-brand">Deconnexion</Button>)
        const Categories = () => (<Link className="nav-item nav-link" to="/category">Catégories</Link>)
        const Users = () => (<Link className="nav-item nav-link" to="/users">Users</Link>)
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {this.props.login && this.props.isAdmin ? <div><Unlog/>  <Categories/>  <Users/> </div>: null}
                {this.props.login && !this.props.isAdmin ? <Unlog/> : <Log/>}
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="navbar-expand" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/article">Articles</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

const stateMap = (store) => {
    return {
        login: store.logged.isLogged,
        isAdmin: store.logged.isAdmin
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        setLogged: () => dispatch({type: 'MODAL'}),
        setLoggedButton: () => dispatch({type: 'SET_CONNECTED'}),
        unsetLogged: () => dispatch({type: 'SET_NOT_CONNECTED'}),
        setAdmin: () => dispatch({type: 'SET_ADMIN'})
    }
}

export default connect(stateMap, mapDispatchToProps)(NavBarComponent);
