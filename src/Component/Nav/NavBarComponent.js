import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../CSS/Nav/style.css';

class NavBarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="navbar-expand" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="Users">Users</Link>
                        <Link className="nav-item nav-link" to="/categories">Catégories</Link>
                        <Link className="nav-item nav-link" to="/articles">Articles</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBarComponent;
