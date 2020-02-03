/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from "react-bootstrap";
import UserService from "../../Service/UserService";
import TitleAsset from "../Assets/TitleAsset";
import '../../CSS/Users/Details.css'

class DetailUserComponent extends PureComponent {

    state = {
        user: {}
    };

    async componentDidMount() {
        const {match: {params}} = this.props;
        let response = await UserService.see(params.id);
        console.log(response.ok)
        if (response.ok) {
            let data = await response.json();
            this.setState({user: data})
            console.log(this.state.user.address)
        }
    }

    render() {
        return (
            <div>
                <div>
                    <TitleAsset title={this.state.user.name}/>
                </div>
                <div className="profileGlobal">
                    <div className="profilePicture">
                        <img src="https://fakeimg.pl/320x440/" alt="illustration"/>
                    </div>
                    <div className="profileContent">
                        <div>
                            <h2>Profile</h2>
                            <hr/>
                            <p>Nom prénom : {this.state.user.name} </p>
                            <p>email : {this.state.user.email}</p>
                            <p>address : address</p>
                            <h2>Groupe</h2>
                            <hr/>
                            <p>Voila le groupe</p>
                        </div>
                        <ButtonToolbar>
                            <Button variant="secondary" size="lg">
                                Modifier
                            </Button>
                            <Button variant="danger" size="lg">
                                Supprimer
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>

        );
    }
}

export default DetailUserComponent;