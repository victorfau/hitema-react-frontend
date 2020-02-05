/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import '../../store';
import '../../CSS/Login/Login.css';
import {Button} from "react-bootstrap";

class LoginComponent extends PureComponent {

    render() {
        return (
            <div className="loginContainer">
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

export default LoginComponent;