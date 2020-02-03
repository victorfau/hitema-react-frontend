import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

class NavBarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBarComponent;