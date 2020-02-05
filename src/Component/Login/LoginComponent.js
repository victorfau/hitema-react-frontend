/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import '../../store';
import '../../CSS/Login/Login.css';
import {Button} from "react-bootstrap";
import {connect} from "react-redux";

class LoginComponent extends PureComponent {

    handleClick = () => {
        this.props.setModal()
    }

    render() {
        return (
            <div onClick={() => this.handleClick()} className="loginContainer">
                <div className="loginForm">
                    <form>
                        <div>
                            <label>Login</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password"/>
                        </div>
                        <div>
                            <Button>
                                Connecter
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const stateMap = (store) => {
    return {
        modal: store.logged.showModal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        setModal: () => dispatch({type: 'MODAL'})
    }
}
export default connect(stateMap, mapDispatchToProps)(LoginComponent);