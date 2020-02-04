/*
 * Copyright lesson
 * Author : Victor FAU
 * Email : victorrfau@gmail.com
 */

import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from "react-bootstrap";

import UserService from "../../Service/UserService";

import Undefined from '../Assets/undefined';
import TitleAsset from "../Assets/TitleAsset";

import '../../CSS/Users/Details.css'

class DetailUserComponent extends PureComponent {

    state = {
        auth: {
            auth: false,
            role: 0
        },
        user: {}
    };

    async componentDidMount() {
        const {match: {params}} = this.props;
        let response = await UserService.see(params.id);
        if (response.ok) {
            let data = await response.json();
            this.setState({user: data.data})
        }
    }

    render() {
        let address;
        if (this.state.user.adressNumber && this.state.user.street && this.state.user.zipCode && this.state.user.city){
            address = <p>adresse : {this.state.user.adressNumber} {this.state.user.street} {this.state.user.zipCode} {this.state.user.city}</p>
        }else{
            address = <p>adresse : <Undefined/></p>;
        }

        return (
            <div className="container">
                <div>
                    <TitleAsset title={this.state.user.name}/>
                </div>
                <div className="profileGlobal">
                    <div className="profilePicture">
                        /*
                        * todo mettre en place la photo de profil du compte.
                        * */
                        <img src="https://fakeimg.pl/320x440/" alt="illustration"/>
                    </div>
                    <div className="profileContent">
                        <div>
                            <h2>Profile</h2>
                            <hr/>
                            <p>Prénom : {this.state.user.name}</p>
                            <p>Nom : {this.state.user.lastName}</p>
                            <p>email : {this.state.user.email}</p>
                            {address}
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