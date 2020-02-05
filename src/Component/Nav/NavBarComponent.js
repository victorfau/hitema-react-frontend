import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import '../../CSS/Nav/style.css';

class NavBarComponent extends Component {

    handleClick = () => {
        this.props.setLogged()
    }

    componentDidMount() {
        console.log(this.props.login)
        this.props.login ? console.log('unlog') : console.log('log')

    }

    render() {
        const Log = () => (<Button onClick={() => this.handleClick()} className="navbar-brand">Connexion</Button>)
        const Unlog = () => (<Button onClick={() => this.handleClick()} className="navbar-brand">Deconnexion</Button>)

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {this.props.login ? <Unlog/> : <Log/>}
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="navbar-expand" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/users">Users</Link>
                        <Link className="nav-item nav-link" to="/category">Catégories</Link>
                        <Link className="nav-item nav-link" to="/article">Articles</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

const stateMap = (store) => {
    return {
        login: store.logged.isLogged
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        setLogged: () => dispatch({type: 'MODAL'})
    }
}

export default connect(stateMap, mapDispatchToProps)(NavBarComponent);
